let UserRating = 1;

function activeState(number)
{
    document.getElementById(`${number}`).style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById(`${number}`).style.color = "hsl(0, 0%, 100%";
    document.getElementById(`${number}`).style.cursor = "pointer";
}

function disactiveState(number)
{
    if(number == UserRating)
    {
        document.getElementById(`${number}`).style.backgroundColor = "hsl(216, 12%, 54%)";
        document.getElementById(`${number}`).style.color = "hsl(0, 0%, 100%)";
    }
    else
    {
        document.getElementById(`${number}`).style.backgroundColor = "hsl(216, 12%, 54%, 0.1)";
        document.getElementById(`${number}`).style.color = "hsl(217, 12%, 63%)";
    }
};

function selectRating(number)
{
    for(let i = 1; i <= 5; i++)
    {
        if(i == number)
        {
            document.getElementById(`${number}`).style.backgroundColor = "hsl(216, 12%, 54%)";
            document.getElementById(`${number}`).style.color = "hsl(0, 0%, 100%";
        }
        else
        {
            document.getElementById(`${i}`).style.backgroundColor = "hsl(216, 12%, 54%, 0.1)";
            document.getElementById(`${i}`).style.color = "hsl(217, 12%, 63%)";
        }
    }
    UserRating = number;
};

function sumbit()
{
    document.getElementsByClassName("Rating")[0].style.display = 'none';
    document.getElementsByClassName("ThankYou")[0].style.display = 'block';
    document.getElementById("getRating").textContent = UserRating;
};