#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  int N;
  cin >> N;

  vector<pair<int, int>> meetings(N);

  for (int i = 0; i < N; ++i) {
    int start, end;
    cin >> start >> end;
    meetings[i] = {end, start};
  }

  // 종료 시간이 빠른 순으로 정렬, 같다면 시작 시간이 빠른 순
  sort(meetings.begin(), meetings.end());

  int count = 0;
  int end_time = 0;

  for (const auto& times : meetings) {
    int end = times.first;
    int start = times.second;

    if (start >= end_time) {
      count++;
      end_time = end;
    }
  }

  cout << count << '\n';
  return 0;
}