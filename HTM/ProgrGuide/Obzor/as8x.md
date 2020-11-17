---
layout: page
title: "AS-8X անցման համար փոփոխություններ"
---

Այստեղ նկարագրված են հիմնական փոփոխությունները նախատեսված AS-8X պրոյեկտի անցման համար։

## Նախապատրաստական քայլեր

* Տեղադրել VS 2019-ը իր բոլոր թարմացումներով։ 
* Տեղադրել AS8X-ի VS 2019-ի ընդլայնումները՝
  * Կոդ գեներատորը` ArmSoft.AS8X.CodeGen.dll,  
    Run as admin "$/AS-8X/bin/ArmSoft.AS8X.CodeGen.bat"
  * ArmSoft.AS8X.VSIX
* Կարգավորման ֆայլում ավելացնել
  * `CONFIGURATIONSERVICE = "http://ConfigurationServiceURL";` ([մանրամասն](../../Config_as_struct.md#common-բաժին))։
  * `SERVICE = "http://host[:port]";`([մանրամասն](../../Config_as_struct.md#common-բաժին))։
* Փոխել տվյալների աղբյուրի կատարման ռեժիմը նշված երկու տարբերակներից մեկով՝
  * Համակարգային նկարագրություններ -> Փոխել կատարման ռեժիմը -> Կատարել կիրառությունների սերվերի վրա
  * `ProcessingMode = 1;`([մանրամասն](../Defs/Data.md#շարահյուսություն))

## Տվյալների աղբյուրի տեղափոխում
Բոլոր տեղերում DsName-ը տվյալների աղբյուրի ներքին անվանումն է։

* `DsName.CodeGen.tt`
   * Եթե կարիք կա, ապա թարմացնել `Constants.cs`-ը և `Resources.cs`-ը (Run custom tool)։
   * AS-8X պրոյեկտում ստեղծել DsName.CodeGen.tt ֆայլը։ Համոզվել, որ լրացված է `TextTemplatingFileGenerator` արժեքը ֆայլի հատկությունների `Custom Tool` դաշտում։
   * `DsName.CodeGen.tt` ֆայլում տեղադրել հետյալ կոդը համապատասխան Path-ով, DS Name-ով և  NameSpace-ով.
      ```csharp
      <#@ template debug="false" hostspecific="true" language="C#" #>
      <#@ assembly name="ArmSoft.AS8X.CodeGen" #>
      <#@ import namespace="ArmSoft.AS8X.CodeGen" #>
      <#@ output extension=".cs" #>
      <#
       // DSParser's parameters:                           CodeGen.xml's path,     FileName with Path,           DS Name,   NameSpace
       string code = DSParser.Parse(this.Host.ResolvePath("..\\..\\CodeGen.xml"), "\\DsFolderRelativePath\\DsName.as", "DsName", "NameSpace");
      #>
      <#= code #>
      ```
      Եթե ճանապարհները ճիշտ են, ապա `Run custom tool` կանչելուց հետո կստեղծվի DsName.CodeGen.cs ֆայլը՝ գեներացված կոդով։

* `DsName.cs`
    * Նախորդ ֆայլի կողքին ստեղծել `DsName.cs` դասը՝ public կոնստրուկտորով: Կոնստրուկտորը կարող է մուտքային տարբեր սերվիսային օբյեկտներ սպասել, որոնք կփոխանցվեն միջուկի կողմից։
      ```csharp
      public partial class DsName
      {
          private readonly IDBService DBService;
      
           public DsName(Resources resources, IDBService dbService) : this(resources)
          {
              this.DBService = dbService;
          }
      }
      ```
    * Եթե տվյալների աղբյուրը պետք է հաշվարկվի մեկ ISN-ով, թղթապանակների տողի թարմացման համար, ապա պետք է `IsUpdatable` մեթոդը վերբեռնել և վերադարձնել `true`
      ```csharp
      public override bool IsUpdatable => true;  
      ```
      Լռությամբ տվյալների աղբյուրը մեկ ISN-ով հաշվարկվող չէ։
   * Ձևավորել Sql հարցումը՝ գերբեռնելով `MakeSQLCommandAsync` մեթոդը.
     ```csharp
     protected override Task<SqlCommand> MakeSQLCommandAsync(DataSourceArgs<Param> args, CancellationToken stoppingToken)
     {
         var cmd = this.DBService.Connection.CreateCommand();
         cmd.CommandText = "...";
         cmd.Parameters.Add(...);
         return Task.FromResult(cmd);
     }
     ```
    MakeSQLCommandAsync մեթոդը կարելի է դարձնել async, երբ կարիք կա լրացուցիչ ասինխրոն կանչեր կատարելու։ Այսպես՝
    ```csharp
    protected override async Task<SqlCommand> MakeSQLCommandAsync(DataSourceArgs<Param> args, CancellationToken stoppingToken)
    {
        var cmd = this.DBService.Connection.CreateCommand();
        if (await parametersService.GetBoolParamAsync())
        { ... }
        // cmd.CommandText = "...";
        return cmd;
    }
    ```


## Գեներատորի աշխատանք 
Գեներատորի կողմից ավտոմատ ձևավորվող կոդը կարելի է փոփոխել սկրիպտում տվյալների աղբյուրի նկարագրությունում հետևյալ հատկությունները միացնելով։
* Սյունակների հատկություններ
    * `CSType` C# կոդի մեջ սյունակի տիպ ([մանրամասն](../column.md#շարահյուսություն))։
    * `Nullable` C# կոդի մեջ սյունակի տիպի `null` արժեք ընդունելու հատկություն ([մանրամասն](../column.md#շարահյուսություն))։
    * `RTrim` տողային տիպի սյունակների վերջին բացակների հեռացնելու հայտանիշ ([մանրամասն](../column.md#շարահյուսություն))։
* Պարամետրերի հատկություններ
    * `CSType` C# կոդի մեջ պարամետրի տիպ ([մանրամասն](../Param.md#շարահյուսություն))։
    * `Nullable` C# կոդի մեջ պարամետրի տիպի `null` արժեք ընդունելու հատկություն ([մանրամասն](../Param.md#շարահյուսություն))։