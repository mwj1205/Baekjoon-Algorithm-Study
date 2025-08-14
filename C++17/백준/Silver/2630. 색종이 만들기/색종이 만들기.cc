#include <iostream>
#include <vector>
using namespace std;

int white = 0, blue = 0;
vector<vector<int>> paper;

bool isSameColor(int x, int y, int size) {
  int color = paper[x][y];
  for (int i = x; i < x + size; i++) {
    for (int j = y; j < y + size; j++) {
      if (paper[i][j] != color) return false;
    }
  }
  return true;
}

void divide(int x, int y, int size) {
  if (isSameColor(x, y, size)) {
    if (paper[x][y] == 0) white++;
    else blue++;
    return;
  }
  int half = size / 2;
  divide(x, y, half);               // 왼쪽 위
  divide(x, y + half, half);        // 오른쪽 위
  divide(x + half, y, half);        // 왼쪽 아래
  divide(x + half, y + half, half); // 오른쪽 아래
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int N;
  cin >> N;
  paper.assign(N, vector<int>(N));
  
  for (int i = 0; i < N; i++) {
    for (int j = 0; j < N; j++) {
      cin >> paper[i][j];
    }
  }

  divide(0, 0, N);

  cout << white << '\n' << blue << '\n';
}
