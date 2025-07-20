#include <iostream>
using namespace std;

const int MAX = 15;
int board[MAX][MAX]; // 체스판
int N, answer = 0;

// 퀸을 놓을 수 있는지 확인
bool isPossible(int row, int col) {
    // 같은 열 위쪽 확인
    for (int i = 0; i < row; i++) {
        if (board[i][col] == 1)
            return false;
    }

    // 왼쪽 대각선 위 확인
    for (int i = 1; row - i >= 0 && col - i >= 0; i++) {
        if (board[row - i][col - i] == 1)
            return false;
    }

    // 오른쪽 대각선 위 확인
    for (int i = 1; row - i >= 0 && col + i < N; i++) {
        if (board[row - i][col + i] == 1)
            return false;
    }

    return true;
}

// 백트래킹
void solution(int row) {
  if (row == N) {
    answer++;
    return;
  }

  for (int col = 0; col < N; ++col) {
    if (isPossible(row, col)) {
      board[row][col] = 1;
      solution(row + 1);
      board[row][col] = 0;
    }
  }
}

int main() {
  cin >> N;
  solution(0);
  cout << answer << '\n';
  return 0;
}