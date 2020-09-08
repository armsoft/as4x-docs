---
layout: page
title: "SendDBMail ֆունկցիա"
---
    
# SendDBMail ֆունկցիա

Էլ. հասցեով ուղարկում է հաղորդագրություններ նշված ստացողերին։ Աշխատում է SQL սերվերի նամակ ուղարկելու մեխանիզմը։

> Տակից կանչում է [sp_send_dbmail](https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sp-send-dbmail-transact-sql)։ 
> Պարամետրերի նկարագրությունները տես այնտեղ։

## Շարահյուսություն

```vb
Sub SendDBMail( _
        Optional ByVal profileName As String = "", _
        Optional ByVal recipients As String = "", _
        Optional ByVal copyRecipients As String = "", _
        Optional ByVal blindCopyRecipients As String = "", _
        Optional ByVal subject As String = "", _
        Optional ByVal body As String = "", _
        Optional ByVal bodyFormat As String = "", _
        Optional ByVal importance As String = "", _
        Optional ByVal sensitivity As String = "", _
        Optional ByVal fileAttachments As String = "")
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| profileName | Պրոֆիլի անվանում։ |
| recipients | Ստացողների էլ. հասցեների ցանկ։ |
| copyRecipients | Պատճենի ստացողների էլ. հասցեների ցանկ։ |
| blindCopyRecipients | Պատճենի ստացողների փակ էլ. հասցեների ցանկ։ |
| subject | Հաղորդագրության թեման։ |
| body | Հաղորդագրության տեքստը։ |
| bodyFormat | Հաղորդագրության տեքստի ձևաչափը։ |
| importance | Հաղորդագրության կարևորությունը։ Տվյալ  արտահայտությունը ստանում է հետևյալ արտահայտություններից մեկը՝ Low, Normal, High։ Լռությամբ արժեքը՝  Normal։ |
| sensitivity | Հաղորդագրության մեջ զգայուն տվյալների առկյայությունը։ Ընդունում է հետևյալ արժեքները՝ Normal, Personal, Private, Confidential։ Լռությամբ արժեքը՝ Normal։ |
| fileAttachments | Սահմանում է ֆայլերի անվանումների ցանկ, որոնք պետք է կցվեն հաղորդագրությանը։ |


## Նկատառումներ

Ստացողների հասցեները ցանկի մեջ թվարկվում են կետ ստորակետի միջոցով։

[Տես նաև](../../functions.html)
