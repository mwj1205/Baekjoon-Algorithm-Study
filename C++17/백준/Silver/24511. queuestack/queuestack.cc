#include <iostream>
#include <deque>
#include <vector>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);

    int N;
    cin >> N;

    vector<int> type(N);  // 0: 큐, 1: 스택
    for (int i = 0; i < N; i++) {
        cin >> type[i];
    }

    vector<int> A(N);
    deque<int> q;
    for (int i = 0; i < N; i++) {
        cin >> A[i];
        // 큐(type[i] == 0)인 것만 역순으로 넣기
        if (type[i] == 0) {
            q.push_front(A[i]);
        }
    }

    int M;
    cin >> M;

    while (M--) {
        int x;
        cin >> x;
        q.push_back(x);            // 새로 들어온 값 삽입
        cout << q.front() << ' ';  // 맨 앞의 값을 출력
        q.pop_front();             // 맨 앞 값 제거
    }

    return 0;
}
