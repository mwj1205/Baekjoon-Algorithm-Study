#include <iostream>
#include <queue>
#include <cmath>

using namespace std;

// 사용자 정의 비교 함수
struct Compare {
    bool operator()(pair<int, int> a, pair<int, int> b) {
        if (a.first == b.first) {
            return a.second > b.second;  // 절댓값이 같으면 더 작은 수가 우선
        }
        return a.first > b.first;  // 절댓값이 작은 수가 우선
    }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int N;
    cin >> N;

    priority_queue<pair<int, int>, vector<pair<int, int>>, Compare> pq;

    while (N--) {
        int x;
        cin >> x;
        if (x == 0) {
            if (pq.empty()) {
                cout << 0 << '\n';
            } else {
                cout << pq.top().second << '\n';
                pq.pop();
            }
        } else {
            pq.push({abs(x), x});
        }
    }

    return 0;
}
