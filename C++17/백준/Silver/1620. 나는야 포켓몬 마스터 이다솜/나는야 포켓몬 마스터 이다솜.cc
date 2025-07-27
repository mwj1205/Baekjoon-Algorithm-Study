#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int N, M;
  cin >> N >> M;

  vector<string> names(N + 1);
  unordered_map<string, int> name_to_index;

  // 포켓몬 도감 입력
  for (int i = 1; i <= N; ++i) {
    string name;
    cin >> name;
    names[i] = name;
    name_to_index[name] = i;
  }

  for (int i = 0; i < M; ++i) {
    string query;
    cin >> query;

    // 숫자인지 체크
    if (isdigit(query[0])) {
      int idx = stoi(query);
      cout << names[idx] << '\n';
    } else {
      cout << name_to_index[query] << '\n';
    }
  }

  return 0;
}
