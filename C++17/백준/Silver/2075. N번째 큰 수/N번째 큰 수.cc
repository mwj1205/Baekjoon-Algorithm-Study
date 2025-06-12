#include <iostream>
#include <queue>
#include <vector>

using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int N;
    cin >> N;

    priority_queue<int, vector<int>, greater<int>> minHeap; // 최소 힙

    for (int i = 0; i < N; ++i) {
        for (int j = 0; j < N; ++j) {
            int num;
            cin >> num;
            minHeap.push(num);

            if (minHeap.size() > N) {
                minHeap.pop(); // 가장 작은 값 제거
            }
        }
    }

    cout << minHeap.top() << "\n"; // N번째로 큰 수
    return 0;
}
