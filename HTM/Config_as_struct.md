---
layout: page
title: "Config.as Կարգավորման ֆայլ" 
---

# Կարգավորման ֆայլ

Config.as ֆայլը նախատեսված է AS-4X հարթակի ծրագրերը կարգավորելու համար։ Մասանավորապես ՀԾ-Բանկի (asbank.exe), ՀԾ-Ձեռնարկության (asbux.exe), ՀԾ-Աշխատավարձի (aswages.exe), Սկրիպտերի խմբագրիչի (scriped.exe), Համակարգի կարգավորիչի (syscon.exe) և Ծրագրի մեկնարկիչի (launcher.exe) համար։

Config.as ֆայլը պետք է տեղադրված լինի կամ exe-ի կողքին կամ կարգավորված լինի որպես համընդհանուր։ Տե՛ս [Config.as Global Registrator.vbs](GlobalConfig.md)։  

Config.as ֆայլը բաղկացած է մի քանի բաժիններից։ 


# Common բաժին
Նախատեսված է AS-4X-ի տվյալների պահոցը նկարագրելու համար, ինչպես նաև մեկնարկի պարամետրերը։  
`Config` ենթաբաժիններում լրացվում են տվյալների պահոցների պարամետրերը և, եթե առանձնացված չեն, սկրիպտերի գտնվելու թղթապանակները։ 

## Շարահյուսություն
``` as4x
Common {
    Description = sDescription;
    Language = nLanguage;
    Authentication = sAuthentication;
    UseWindowsDefaultPrinter = nUseWindowsDefaultPrinter;
    UseTestB2B = nUseTestB2B;
    ConfigurationService = sConfigurationService;

    Config {
        Name = sConfigName1;
        Server = sServer1; 
        Database = sDatabase1;
        BaseFolder = sBaseFolder1;
        BackupFolder = sBackupFolder1;
        SS = sSourceConnected1;
        Context = sContext1;
        StorePrnSet = sStorePrinterSetting1;
        ReadOnly = sReadonly1;
        Service = sService1;
    };
    '.....
    Config {
        Name = sConfigNameN;
        Server = sServerN; 
        Database = sDatabaseN;
        BaseFolder = sBaseFolderN;
        BackupFolder = sBackupFolderN;
        SS = sSourceConnectedN;
        Context = sContextN;
        StorePrnSet = sStorePrinterSettingN;
        ReadOnly = sReadonlyN;
        Service = sServiceN;
    };
};
```

Բաղադրիչներն են՝ 


| Պարամետր | Նկարագրություն |
|--|--|
| sConfigName | Տվյալների պահոցի կարգավորման անուն։ |
| sServer | Տվյալների պահոցի SQL Server-ը։ |
| sDatabase | Տվյալների պահոցի անունը սերվերում։ |
| sBaseFolder | Սկրիպտերի գտնվելու թղթապանակը: Օգտագործվում է SysCon-ով ներմուծելու կամ ScriptEditor-ով բացելու համար։ Լրացվում է կա՛մ ամբողջ ուղին (նախընտրելի), կա՛մ exe-ի նկատմամբ հարաբերական ուղին։ Չի օգտագործվում, երբ կիրառվում են [առանձնացված `BaseFolder`-ները](#basefolder-բաժին)։ |
| sBackupFolder | Պահեստային պատճենների թղթապանակ (shared path)։ Պարամետրը օգտագործվում է SysCon-ի և AS-4X-ի կողմից պահեստային պատճենների ստեղծման առաջադրանքների համար։ |
| sSourceConnected | Ցույց է տալիս `BaseFolder`-ի Team Foundation Server-ի հետ կապվածությունը։ Պարամետրը կիրառվում է ScriptEditor-ի կողմից։ `YES` և `NO` արժեք ընդունող։ Լռությամբ արժեքը `NO`։ |
| sContext | Ցույց է տալիս, թե տվյալների պահոցը, որ ծրագրինն է՝ ՀԾ-Բանկ (`ASBANK`), ՀԾ-Ձեռնարկություն (`ASENTERPRISE`), ՀԾ-Աշխատավարձ (`ASWAGES`), հին ՀԾ-Վաճառքների կառավարում (`ASMOBILETRADE`)։ <br/> ScriptEditor-ը օգտագործում է պարամետրը, որ որոշի թե `BaseFolder`-ի սկրիպտերում, որ ֆունկցիաներն են առաջարկվելու (IntelliSense)։ |
| sStorePrinterSetting | Տպիչի կարգավորումների պահպանման տեղը Windows գրանցամատյանում։ 1 արժեքի դեպքում պահպանում է `HKEY_CURRENT_USER`-ում, 0 արժեքի դեպքում՝ `HKEY_LOCAL_MACHINE`-ում։ Լռությամբ արժեքը 0։ |
| sReadOnly | Սահմանում է տվյալների պահոցի հետ աշխատանքի ռեժիմը։ 1 արժեքի դեպքում տվյալների պահոցի հետ միացումը իրականացվում է «միայն կարդալու» ռեժիմով, 0 արժեքի դեպքում «փոփոխելու» ռեժիմով։ Լռությամբ արժեքը 0։ «Միայն կարդալու» ռեժիմում համակարգ մուտք գործելու համար  անհրաժեշտություն չկա օգտագործողների «համաձայեցում» կատարելու անհրաժեշտություն։ Այն հարմար է կրկնօրինակված տվյալների պահոցի հետ աշխատելուց։ |
| sService |  AS-8X սերվիսի web հասցեն։ |
| nLanguage | Սահմանում է համակարգի մեկնարկի լեզուն։ Հնարավոր արժեքներն են՝ 1-հայերեն, 3-անգլերեն։ Լռությամբ արժեքը 1։ AS-4X ծրագրի մուտքից հետո լեզում որոշվում է օգտագործողի կարգավորումներից։ |
| sDescription | `Common` բաժնի նկարագրություն։ |
| sAuthentication | Օգտագործողի նույնականացման եղանակ։ `Windows` արժեքի դեպքում SQL Server-ի հետ կապը հաստատվում է Windows նույնականացմամբ։ Այլ դեպքերում SQL Server-ի նույնականացմամբ։ Համակարգի բոլոր օգտագործողները պետք է աշխատեն մեկ ընդհանուր նույնականացման եղանակով։ |
| nUseWindowsDefaultPrinter | Սահմանում է տպիչ սարքի հետ աշխատելու կարգավիճակը։ 0 արժեքի դեպքում՝ տպիչ սարք, որի միջոցով անհրաժեշտ է տպել, հնարավոր է ընտրել ծրագրի կարգավորումներից, իսկ մնացած արժեքների դեպքում օգտագործվում է windows default տպիչ սարքը։ Լռությամբ արժեքը 0։ |
| nUseTestB2B | Տեստային b2b սերվերի օգտագործման հայտանիշ։ 1 արժեքի դեպքում տրվում է տեստային սերվերը։ 0 արժեքի դեպքում՝ իրական սերվերը։ Լռությամբ արժեքը 0։ |
| sConfigurationService | Տվյալների պահոցների կոնֆիգուրացիաների սերվիսի web հասցեն։ Նշված լինելու դեպքում առանձին `Config` բաժիններ կարելի է չգրել և ծրագրերը կօգտվեն միայն կոնֆիգուրացիաների սերվիսում նշված տվյալների պահոցներից։ |


# BaseFolder բաժին 

Մեծ քանակությամբ նախագծերի և տվյալների պահոցների հետ աշխատանքի համար տրված է հնարավորություն `BaseFolder`-ների առանձնացմումը տվյալների պահոցի կարգավորումներից։ `BaseFolder`-ները առանձին նկարագրելուց հետո SysCon-ը և ScriptEditor-ը սկսում են աշխատել դրանց հետ։ 

## Շարահյուսություն 
``` as4x
Common {
    '...
    BaseFolder {
        Path = sBaseFolder1;
        SS = sSourceConnected1;
        Context = sContext1;
    };
    '.....
    BaseFolder {
        Path = sBaseFolderN;
        SS = sSourceConnectedN;
        Context = sContextN;
    };
};
```

Բաղադրիչները նունն են, ինչ `Config` ենթաբաժնում։

# Launcher բաժին

նախատեղված է այն ֆայլերի նկարագրության համար, որոնց թարմեցումը կարող է կատարվել տվյալների պահոցի սերվերից։ Այս բաժինը կիրառվում է SysCon-ի և Launcher-ի կողմից։ 

## Շարահյուսություն
``` as4x
Launcher {
    Description = sDescription;
    Server = sServer;
    Database = sDataBase;
    Update { Name = sFileName1; };
    Update { Name = sFileName1; ="SELFREG"; };
    '...
    Update { Name = sFileNameM; ="SELFREG"; };
};
```

Բաղադրիչներն են՝ 

| Պարամետր | Նկարագրություն |
|--|--|
| sServer | Տվյալների պահոցի SQL Server-ը։ |
| sDatabase | Տվյալների պահոցի անունը սերվերում։ Բացակայության դեպքում կիրառվում է առաջին տվյալների պահոցը նշված սերվերին համապատասխան `Config` ենթաբաժիններից։ |
| sFileName | Սահմանում է ֆայլի հարաբերական ուղին։ |
|"SELFREG"| Ոչ պարտադիր դաշտ, որը տրվում է, երբ անհրաժեշտ է թարմացվող ֆայլը գրանցել Windows-ում։ Կիրառվում է OLE գրադարանների գրանցման համար։ |


## Նկատառումներ

Եթե անհնար է պարզել ֆայլի տարբերակը օպերացիոն համակարգի գործիքներով, ապա օգտագործվում է .var ընդլայնմամբ և նույն անվանմամաբ ֆայլը:  
Օրինակ՝ `asolap.xla` ֆայլի համար համապատասխան `asolap.ver` ֆայլը կարող է ունենալ հետևյալ բովանդակությունը՝

```
1.2.1.30
Armenian Software
AS3XX Kernel with Bank extension
Copyright . 1997-2000, Armenian Software, Ltd.
```

# Scriped բաժին

Սահմանում է ScriptEditor-ի կարգավորումներ։

## Շարահյուսություն
``` as4x
Scriped {
    TFS = sTfsUrl;
};
```

Բաղադրիչներն են՝    

| Պարամետր | Նկարագրություն |
|--|--|
| sTfsUrl | Team Foundation Server-ի հավաքածուի web հասցեն։ |
