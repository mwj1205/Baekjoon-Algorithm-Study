#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int N;
  cin >> N;

  vector<int> A(N);
  for (int i = 0; i < N; ++i) cin >> A[i];

  vector<int> dp(N, 1);    // dp[i]: A[i]를 마지막 원소로 갖는 부분 수열의 길이
  vector<int> prev(N, -1); // prev[i]: A[i] 앞에 오는 부분 수열 원소의 인덱스

  // dp로 최대 길이 계산, 경로 추적 정보 저장
  for (int i = 0; i < N; ++i) {
    for (int j = 0; j < i; ++j) {
      if (A[j] < A[i] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        prev[i] = j; // 이전 인덱스 저장
      }
    }
  }

  int maxLen = 0;
  int idx = -1;

  // 최대 길이와 마지막 인덱스 찾기
  for (int i = 0; i < N; ++i) {
    if (dp[i] > maxLen) {
      maxLen = dp[i];
      idx = i;
    }
  }

  // 부분 수열 저장
  vector<int> result;
  while (idx != -1) {
    result.push_back(A[idx]);
    idx = prev[idx];
  }
  reverse(result.begin(), result.end());

  // 출력
  cout << maxLen << '\n';
  for (int x : result) cout << x << ' ';

  return 0;
}