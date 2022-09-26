
class Solution
{
public:
    int numberOfSubarrays(vector<int> &v, int k)
    {

        unordered_map<int, int> m;

        for (int i = 0; i < v.size(); ++i)
        {
            if (v[i] & 1)
                v[i] = 1;

            else
                v[i] = 0;
        }

        int sum = 0, i, cnt = 0;
        for (i = 0; i < v.size(); ++i)
        {
            sum += v[i];

            // If map is initialized with map[0] = 1 then we don't need this condition
            if (sum == k)
                cnt++;

            if (m.find(sum - k) != m.end())
                cnt += m[sum - k];

            m[sum]++;
        }

        return cnt;
    }
};