#include <iostream>
#include <vector>
#include <queue>
#include <tuple>
using namespace std;

const int INF = 1e9;
int V, E, K;
vector<pair<int, int>> graph[20001];
vector<int> dist;

void dijkstra(int start) {
  priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq; // 최소
  dist[start] = 0;
  pq.push({0, start});

  while (!pq.empty()) {
    int cost = pq.top().first;
    int now = pq.top().second;
    pq.pop();

    if (dist[now] < cost) continue;

    for (auto& edge : graph[now]) {
      int next = edge.first;
      int weight = edge.second;
      int nextCost = cost + weight;
      if (nextCost < dist[next]) {
        dist[next] = nextCost;
        pq.push({nextCost, next});
      }
    }
  }
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  cin >> V >> E >> K;
  dist.resize(V + 1, INF);

  // 그래프 생성
  for (int i = 0; i < E; i++) {
    int u, v, w;
    cin >> u >> v >> w;
    // emplace_back: 객체를 직접 생성해서 뒤에 추가
    graph[u].emplace_back(v, w);
  }

  dijkstra(K);

  for (int i = 1; i <= V; i++) {
    if (dist[i] == INF) cout << "INF\n";
    else cout << dist[i] << '\n';
  }

  return 0;
}
