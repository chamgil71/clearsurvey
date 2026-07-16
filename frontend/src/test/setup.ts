import "@testing-library/jest-dom";

// Radix UI(Select 등)는 jsdom에 없는 포인터 캡처/스크롤 API를 사용한다.
// 테스트 환경에서 이 메서드들을 no-op으로 채워 컴포넌트가 정상 동작하도록 한다.
if (!Element.prototype.hasPointerCapture) {
  Element.prototype.hasPointerCapture = () => false;
}
if (!Element.prototype.setPointerCapture) {
  Element.prototype.setPointerCapture = () => {};
}
if (!Element.prototype.releasePointerCapture) {
  Element.prototype.releasePointerCapture = () => {};
}
if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = () => {};
}
