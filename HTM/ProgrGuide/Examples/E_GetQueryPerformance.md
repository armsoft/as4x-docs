<html>
<head>
<title>GetQueryPerformance</title>
    <style type="text/css">
        .style2
        {
            color: #009900;
        }
        .style3
        {
            color: #339933;
        }
        .style5
        {
            color: #006699;
        }
        .style6
        {
            font-size: x-small;
        }
        </style>
</head>

<body>

<p><strong><font face="Arial" size="3">Пример работы функции GetQueryPerformanceCounter и GetQueryPerformanceFrequency</font></strong></p>

    <p>
        <font face="Arial">В примере вызываются функции <strong><em>GetQueryPerformanceCounter</em></strong> и <strong><em>GetQueryPerformanceFrequency</em></strong>
        для вычисления времени реализации программного кода в миллисекундах.<p><font face="Arial">
Public Function TestQueryPerformanceCounter() As Currency<br>
&nbsp;&nbsp;&nbsp;
Dim ticksPerSecond As Currency<br>
&nbsp;&nbsp;&nbsp;
Dim ticksCount1 As Currency<br />
&nbsp;&nbsp;&nbsp; Dim ticksCount2 As Currency<br />
        <br />
&nbsp;&nbsp;<br>
&nbsp;&nbsp;&nbsp;
ticksPerSecond = <a href="../Functions/Functions/GetQueryPerformanceFrequency.html">GetQueryPerformanceFrequency</a>()<br>
&nbsp;&nbsp;&nbsp;
ticksCount1 = <a href="../Functions/Functions/GetQueryPerformanceCounter.html">GetQueryPerformanceCounter</a>()<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; ...<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="style2">&nbsp;&nbsp; </span>
        <span class="style5">&nbsp;<span class="style6">&#39;Часть программного кода, время реализации которого нужно вычислить 
        в миллисекундах</span></span><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ...<br />
&nbsp;&nbsp;&nbsp; ticksCount2 = <a href="../Functions/Functions/GetQueryPerformanceCounter.html">GetQueryPerformanceCounter</a>()<br />
        <br />
&nbsp;&nbsp;&nbsp; <span class="style3"><span class="style6">&#39;Отнимаем от </span> <strong><em>
        <span class="style6">ticksCount2</span></em></strong><span class="style6"> - 
        </span> <strong><em><span class="style6">ticksCount1</span></em></strong><span 
            class="style6">, чтобы получить количество тиков часов работы той части 
        програмнного кода, которое нас интересует,&nbsp;делим на <em> <strong>ticksPerSecond</strong></em> 
        для получения времени в секундах и умножаем на 1000, чтобы получить время в 
        миллисекундах. </span></span><br>
&nbsp;&nbsp;&nbsp;
TestQueryPerformanceCounter = (ticksCount2 - ticksCount1) * 1000 / ticksPerSecond<br>
End Function<br>
        <br>
</font></p>
</body>
</html>
