let thisis = "Matchers Ref";
// Reference: https://jestjs.io/docs/expect
//            https://inpa.tistory.com/entry/JEST-%F0%9F%93%9A-jest-%EA%B8%B0%EB%B3%B8-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC
//            https://runebook.dev/ko/docs/jest/expect#tostrictequalvalue
thisis = "the other Refs";
/* Reference: https://crmrelease.tistory.com/106 
              https://crmrelease.tistory.com/category/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-Web/Jest%28TDD%29 
              https://www.daleseo.com/jest-basic/
              https://brunch.co.kr/@pubjinson/16
*/

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
expect().toMatchObject();

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
