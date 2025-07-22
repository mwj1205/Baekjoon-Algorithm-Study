#include <iostream>
#include <string>
#include <sstream>
using namespace std;

int main() {
  string s;
  cin >> s;

  stringstream ss(s);
  string buf;
  int result = 0;
  bool first = true;

  // '-' 기준으로 나눔
  while (getline(ss, buf, '-')) {
    int total = 0;
    stringstream ts(buf);
    string num;

    // '+' 기준으로 부분 합 계산
    while (getline(ts, num, '+')) {
      total += stoi(num);
    }

    if (first) {
      result += total;
      first = false;
    } else {
      result -= total;
    }
  }

  cout << result << '\n';
  return 0;
}