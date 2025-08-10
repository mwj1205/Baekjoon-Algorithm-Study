#include <iostream>
#include <vector>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int N, M, K;
  cin >> N >> M;
  vector<vector<int>> A(N, vector<int>(M));

  for (int i = 0; i < N; i++)
    for (int j = 0; j < M; j++)
      cin >> A[i][j];

  int M2;
  cin >> M2 >> K;
  vector<vector<int>> B(M2, vector<int>(K));

  for (int i = 0; i < M2; i++)
    for (int j = 0; j < K; j++)
      cin >> B[i][j];

  vector<vector<int>> C(N, vector<int>(K, 0)); // 곱셈 결과 행렬

  // 행렬 곱셈 연산
  for (int i = 0; i < N; i++) {
    for (int j = 0; j < K; j++) {
      for (int k = 0; k < M; k++) {
        C[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  // 출력
  for (int i = 0; i < N; i++) {
    for (int j = 0; j < K; j++) {
      cout << C[i][j] << ' ';
    }
    cout << '\n';
  }
}
