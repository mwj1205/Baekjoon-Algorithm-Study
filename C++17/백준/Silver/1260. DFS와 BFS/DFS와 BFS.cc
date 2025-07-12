#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

const int MAX = 1001;
vector<int> graph[MAX];
bool visited[MAX];

void dfs(int v) {
  visited[v] = true;
  cout << v << ' ';
  for (int next : graph[v]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
}

void bfs(int v) {
  queue<int> q;
  q.push(v);
  visited[v] = true;

  while (!q.empty()) {
    int cur = q.front();
    q.pop();
    cout << cur << ' ';

    for (int next : graph[cur]) {
      if (!visited[next]) {
        visited[next] = true;
        q.push(next);
      }
    }
  }
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);

  int N, M, V;
  cin >> N >> M >> V;

  for (int i = 0; i < M; ++i) {
    int a, b;
    cin >> a >> b;
    graph[a].push_back(b);
    graph[b].push_back(a); // 양방향으로 연결
  }

  // 정점 번호가 작은 것을 먼저 방문
  for (int i = 1; i <= N; ++i) {
    sort(graph[i].begin(), graph[i].end());
  }

  dfs(V);
  cout << '\n';

  fill(visited, visited + MAX, false); // visited 초기화
  bfs(V);
  cout << '\n';

  return 0;
}