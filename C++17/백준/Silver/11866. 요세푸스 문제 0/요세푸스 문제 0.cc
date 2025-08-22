#include <iostream>
#include <vector>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int N, K;
  cin >> N >> K;

  vector<int> people;
  for (int i = 1; i <= N; i++) people.push_back(i);

  vector<int> result;
  int idx = 0;

  while (!people.empty()) {
    idx = (idx + K - 1) % people.size(); // K번째 사람
    result.push_back(people[idx]);
    people.erase(people.begin() + idx);
  }

  cout << "<";
  for (int i = 0; i < N; i++) {
    cout << result[i];
    if (i != N - 1) cout << ", ";
  }
  cout << ">\n";

  return 0;
}
