#include <iostream>
#include <stack>
#include <string>

using namespace std;

bool isVPS(const string& s) {
  stack<char> st;
  for (char c : s) {
    if (c == '(') {
      st.push(c);
    } else { // ')'
      if (st.empty()) return false;
      st.pop();
    }
  }
  return st.empty();
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);
  
  int T;
  cin >> T;
  while (T--) {
    string s;
    cin >> s;
    cout << (isVPS(s) ? "YES" : "NO") << "\n";
  }
}
