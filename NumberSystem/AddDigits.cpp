
int addDigits(int num)
{

    while (num > 9)
    {
        int ans = 0;
        while (num != 0)
        {
            int rem = num % 10;
            num = num / 10;
            ans = ans + rem;
        }
        num = ans;
    }
    return num;
}