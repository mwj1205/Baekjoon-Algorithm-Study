#include <iostream>
#include <vector>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int N, M;
  cin >> N >> M;

  vector<int> A(N + 1);
  vector<int> pre(N + 1); // 누적합 배열. 미리 누적합 구해두고 pre[j] - pre[i - 1]로 계산
  pre[0] = 0;

  // 누적합
  for (int i = 1; i <= N; ++i) {
    cin >> A[i];
    pre[i] = pre[i - 1] + A[i];
  }

  // 구간합
  for (int k = 0; k < M; ++k) {
    int i, j;
    cin >> i >> j;
    cout << pre[j] - pre[i - 1] << '\n';
  }
}