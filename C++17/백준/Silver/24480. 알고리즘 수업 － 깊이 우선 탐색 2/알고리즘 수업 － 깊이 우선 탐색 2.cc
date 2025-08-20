#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

const int MAXN = 100000 + 5;
vector<int> adj_list[MAXN]; // 인접리스트
int visited[MAXN];
int order[MAXN]; // order[i] = 정점 i의 방문 순서
int counter = 0; // 방문 순서

void dfs(int u) {
  visited[u] = 1;
  order[u] = ++counter;
  for (int v : adj_list[u]) {
    if (!visited[v]) dfs(v);
  }
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int N, M, R;
  cin >> N >> M >> R;

  for (int i = 0; i < M; ++i) {
    int u, v;
    cin >> u >> v; // 정점 u와 정점 v의 가중치 1인 양방향 간선을 나타낸다.
    adj_list[u].push_back(v);
    adj_list[v].push_back(u);
  }

  for (int i = 1; i <= N; ++i) {
    sort(adj_list[i].begin(), adj_list[i].end(), greater<int>()); // 내림차순
  }

  dfs(R);

  for (int i = 1; i <= N; ++i) {
    cout << order[i] << '\n';
  }
  return 0;
}