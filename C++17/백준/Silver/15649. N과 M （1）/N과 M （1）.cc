#include <iostream>
#include <vector>
using namespace std;

int N, M;
bool visited[9];
vector<int> seq;

void dfs(int depth) {
  if (depth == M) {
    for (int i = 0; i < M; i++) {
      cout << seq[i] << ' ';
    }
    cout << '\n';
    return;
  }
  
  for (int i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      seq.push_back(i);
      dfs(depth + 1);
      seq.pop_back();
      visited[i] = false;
    }
  }
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  cin >> N >> M;
  dfs(0);
}