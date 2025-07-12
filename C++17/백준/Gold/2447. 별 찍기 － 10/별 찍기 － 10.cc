#include <iostream>
#include <vector>
using namespace std;

int N;
vector<string> board;

void create_blank(int x, int y, int size) {
  if (size == 1) return;

  int next = size / 3;
  // 가운데 공백으로 채우기
  for (int i = x + next; i < x + 2 * next; ++i) {
    for (int j = y + next; j < y + 2 * next; ++j) {
      board[i][j] = ' ';
    }
  }

  // 8개 영역 재귀호출
  for (int dx = 0; dx < 3; ++dx) {
    for (int dy = 0; dy < 3; ++dy) {
      if (dx == 1 && dy == 1) continue; // 가운데는 이미 공백처리 했으니 넘어가기
      create_blank(x + dx * next, y + dy * next, next);
    }
  }
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  cin >> N;
  board = vector<string>(N, string(N, '*'));

  create_blank(0, 0, N);

  for (int i = 0; i < N; i++) {
    cout << board[i] << '\n';
  }

  return 0;
}