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

  vector<int> leftA(N, 1); // 증가
  vector<int> rightA(N, 1); // 감소

  // 왼쪽에서 오른쪽으로 증가하는 부분 수열
  for (int i = 0; i < N; ++i) {
    for (int j = 0; j < i; ++j) {
      if (A[j] < A[i])
        leftA[i] = max(leftA[i], leftA[j] + 1);
    }
  }

  // 오른쪽에서 왼쪽으로 감소하는 부분 수열
  for (int i = N - 1; i >= 0; --i) {
    for (int j = N - 1; j > i; --j) {
      if (A[j] < A[i])
        rightA[i] = max(rightA[i], rightA[j] + 1);
    }
  }

  // 가장 긴 바이토닉 부분 수열
  int maxLength = 0;
  for (int i = 0; i < N; ++i) {
    maxLength = max(maxLength, leftA[i] + rightA[i] - 1);
  }

  cout << maxLength << '\n';
  return 0;
}