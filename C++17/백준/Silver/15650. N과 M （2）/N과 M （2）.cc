#include <iostream>
#include <vector>
using namespace std;

int N, M;
vector<int> seq;

void dfs(int start, int depth) {
  if (depth == M) {
    for (int i = 0; i < M; i++) {
      cout << seq[i] << (i == M - 1 ? '\n' : ' ');
    }
    return;
  }
  for (int i = start; i <= N; i++) {
    seq.push_back(i);
    dfs(i + 1, depth + 1); // i+1부터 탐색
    seq.pop_back();
  }
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);

  cin >> N >> M;
  dfs(1, 0);
}
