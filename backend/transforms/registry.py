from __future__ import annotations

import importlib
import pkgutil
from pathlib import Path
from typing import Any, Callable

Transform = Callable[..., Any]


class TransformRegistry:
    def __init__(self) -> None:
        self._transforms: dict[str, Transform] = {}

    # ------------------------------------------------------------------
    # Registration
    # ------------------------------------------------------------------

    def register(self, name: str, fn: Transform) -> None:
        self._transforms[name] = fn

    def register_dict(self, d: dict[str, Transform]) -> None:
        self._transforms.update(d)

    def load_domain_module(self, module_path: str) -> None:
        """Import a domain module and register its _TRANSFORMS dict."""
        mod = importlib.import_module(module_path)
        transforms: dict = getattr(mod, "_TRANSFORMS", {})
        self.register_dict(transforms)

    def auto_load_domain(self, package: str = "transforms.domain") -> None:
        """Auto-discover all modules inside a package and load their _TRANSFORMS."""
        pkg = importlib.import_module(package)
        pkg_path = Path(pkg.__file__).parent  # type: ignore[arg-type]
        for _, mod_name, _ in pkgutil.iter_modules([str(pkg_path)]):
            self.load_domain_module(f"{package}.{mod_name}")

    # ------------------------------------------------------------------
    # Lookup / apply
    # ------------------------------------------------------------------

    def get(self, name: str) -> Transform | None:
        return self._transforms.get(name)

    def apply(self, name: str, val: Any, **kwargs: Any) -> Any:
        fn = self._transforms.get(name)
        if fn is None:
            raise KeyError(f"Transform '{name}' is not registered")
        return fn(val, **kwargs)

    def __contains__(self, name: str) -> bool:
        return name in self._transforms

    def __repr__(self) -> str:  # pragma: no cover
        keys = ", ".join(sorted(self._transforms))
        return f"TransformRegistry([{keys}])"


# module-level singleton — import and use directly
registry = TransformRegistry()
