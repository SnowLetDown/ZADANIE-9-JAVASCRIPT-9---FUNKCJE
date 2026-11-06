
function SUMA(a, b)
{
    wynik = parseInt(a) + parseInt(b);
    document.getElementById('wynikSuma').innerHTML = wynik;
}

function PODSTAWY()
{
    a = parseFloat(document.getElementById('pod1').value);
    b = parseFloat(document.getElementById('pod2').value);

    roznica = a - b;
    iloczyn = a * b;
    iloraz = a / b;

    document.getElementById('wynikPodstawy').innerHTML =
    "Różnica: " + roznica + "<br>" +
    "Iloczyn: " + iloczyn + "<br>" +
    "Iloraz: " + iloraz;
}

function KALKULATOR()
{
    a = parseFloat(document.getElementById('kal1').value);
    b = parseFloat(document.getElementById('kal2').value);
    dzialanie = document.getElementById('dzialanie').value;

    if (dzialanie == "suma")
        wynik = a + b;
    else if (dzialanie == "roznica")
        wynik = a - b;
    else if (dzialanie == "iloczyn")
        wynik = a * b;
    else
        wynik = a / b;

    document.getElementById('wynik').innerHTML = wynik;
}

function MAKS(a, b, c)
{
    a = parseFloat(document.getElementById('maks1').value);
    b = parseFloat(document.getElementById('maks2').value);
    c = parseFloat(document.getElementById('maks3').value);

    max = a;

    if (b > max)
        max = b;

    if (c > max)
        max = c;

    document.getElementById('wynikMaks').innerHTML = max;
}

function WZROST()
{
    wzrost = parseFloat(document.getElementById('wzrost').value);

    if (wzrost < 150)
        wynik = "Niski";
    else if (wzrost > 180)
        wynik = "Wysoki";
    else
        wynik = "Średni";

    document.getElementById('wynikWzrost').innerHTML = wynik;
}

function BMI()
{
    wzrost = parseFloat(document.getElementById('bmiWzrost').value);
    waga = parseFloat(document.getElementById('bmiWaga').value);

    bmi = waga / ((wzrost / 100) * (wzrost / 100));
    bmi = Math.round(bmi * 1000) / 1000;

    if (bmi < 18.5)
        komentarz = "Za mało!";
    else if (bmi > 25)
        komentarz = "Za dużo!";
    else
        komentarz = "OK!";

    document.getElementById('wynikBMI').innerHTML =
    "BMI: " + bmi + "<br>" + komentarz;
}

function STARSZY()
{
    data1 = new Date(document.getElementById('data1').value);
    data2 = new Date(document.getElementById('data2').value);

    if (data1 < data2)
        alert("Pierwsza osoba jest starsza");
    else if (data2 < data1)
        alert("Druga osoba jest starsza");
    else
        alert("Osoby są w tym samym wieku");
}

function PRZESTEPNY()
{
    rok = parseInt(document.getElementById('rok').value);

    if ((rok % 4 == 0 && rok % 100 != 0) || rok % 400 == 0)
        console.log("Rok przestępny");
    else
        console.log("Rok nieprzestępny");
}

function SILA()
{
    haslo = document.getElementById('haslo').value;

    if (haslo.length <= 4)
        wynik = "Hasło słabe";
    else if (haslo.length <= 8)
        wynik = "Hasło średnie";
    else
        wynik = "Hasło mocne";

    if (!/[0-9]/.test(haslo))
        wynik = "Hasło słabe - brak cyfry";

    if (!/[A-Z]/.test(haslo))
        wynik = "Hasło słabe - brak dużej litery";

    if (!/[a-z]/.test(haslo))
        wynik = "Hasło słabe - brak małej litery";

    if (!/[^a-zA-Z0-9]/.test(haslo))
        wynik = "Hasło słabe - brak znaku specjalnego";

    document.getElementById('wynikHaslo').innerHTML = wynik;
}

function TROJKAT()
{
    a = parseInt(document.getElementById('bok1').value);
    b = parseInt(document.getElementById('bok2').value);
    c = parseInt(document.getElementById('bok3').value);

    if (a + b > c && a + c > b && b + c > a)
        console.log("Można utworzyć trójkąt");
    else
        console.log("Nie można utworzyć trójkąta");
}

function SZYFR()
{
    tekst = document.getElementById('tekst').value;
    szyfr = "";

    for (i = 0; i < tekst.length; i++)
    {
        kod = tekst.charCodeAt(i);

        if (kod >= 97 && kod <= 122)
        {
            kod = ((kod - 97 + 2) % 26) + 97;
        }
        else if (kod >= 65 && kod <= 90)
        {
            kod = ((kod - 65 + 2) % 26) + 65;
        }

        szyfr += String.fromCharCode(kod);
    }

    document.getElementById('zaszyfrowany').innerHTML = szyfr;
}


