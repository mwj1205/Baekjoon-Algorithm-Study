#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int N;
  cin >> N;
  vector<pair<int, int>> points(N);

  for (int i = 0; i < N; i++) {
    int x, y;
    cin >> x >> y;
    points[i] = {x, y};
  }

  sort(points.begin(), points.end());

  for (auto &p : points) {
    cout << p.first << " " << p.second << "\n";
  }

  return 0;
}
