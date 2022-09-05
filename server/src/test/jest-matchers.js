expect().toBe;
expect().toEqual;
expect().toStrictEqual;

expect().toBeNull;
expect().toBeNaN;

expect().toBeUndefined;
expect().toBeDefined;

expect().toBeTruthy;
expect().toBeFalsy;

expect().toBeGreaterThan; // >
expect().toBeGreaterThanOrEqual; // >=
expect().toBeLessThan; // <
expect().toBeLessThanOrEqual; // <=

expect().toBeCloseTo; // 소수점 계산(근사치 계산)

expect().toMatch(); // regexe

expect().toContain(); // 배열에서 특정 요소 확인

expect().toThrow(); // 예외 발생 여부 테스트

beforeEach(() => {}); // 각 테스트 전마다 실행
beforeAll(() => {}); // 전체 테스트 전 실행
afterEach(() => {}); // 각 테스트 후마다 실행
afterAll(() => {}); // 전체 테스트 후 실행

expect().toBeCalled(); // 한번 이상 호출
expect().toBeCalledTimes(); // 정확한 호출 횟수
expect().toBeCalledWith(); // 인수의 값 체크
expect().lastCalledWith(); // 마지막으로 실행된 함수의 인수 체크
