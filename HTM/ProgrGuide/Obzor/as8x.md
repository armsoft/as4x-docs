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
  * ArmSoft.AS8X.VSIX-ը
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
   * Համապատասխան տեղում ստեղծել DsName.CodeGen.tt ֆայլը։
   * `DsName.CodeGen.tt` ֆայլում տեղադրել հետյալ կոդը համապատասխան Path-ով, DS Name-ով և  NameSpace-ով.
      ```csharp
      <#@ template debug="false" hostspecific="true" language="C#" #>
      <#@ assembly name="ArmSoft.AS8X.CodeGen" #>
      <#@ import namespace="ArmSoft.AS8X.CodeGen" #>
      <#@ output extension=".cs" #>
      <#
       // DSParser's parameters:                           CodeGen.xml's path,     FileName with Path,           DS Name,   NameSpace
       string code = DSParser.Parse(this.Host.ResolvePath("..\\..\\CodeGen.xml"), "\\SOURCE\\DsName\\DsName.as", "DsName", "NameSpace");
      #>
      <#= code #>
      ```
      Եթե ճանապարհները ճիշտ են, ապա `Run custom tool` կանչելուց հետո կստեղծվի DsName.CodeGen.cs ֆայլը՝ գեներացված կոդով։

* `DsName.cs`
    * Համապատասխան տեղում ստեղծել `DsName.cs` դասը՝ public կանստրուկտորով
      ```csharp
      public partial class DsName
      {
          private readonly IDBService DBService;
      
          public DsName(Resources resources, IDBService dbService, EnterpriseParametersService parametersService) : this(resources)
          {
              this.DBService = dbService;
              this.ParametersService = parametersService;
          }
      }
      ```
    * Եթե տվյալների աղբյուրը `Updatable` է, ապա պետք է `IsUpdatable` մեթոդը  override  անել՝
      ```csharp
      public override bool IsUpdatable => true; 
      ```
      Լռությամբ տվյալների աղբյուրը `Updatable` չէ։
   * Ձևավորել Sql հարցումը՝
     ```csharp
     protected override async Task<SqlCommand> MakeSQLCommandAsync(DataSourceArgs<Param> args, CancellationToken stoppingToken)
     {
         var cmd = this.DBService.Connection.CreateCommand();
         var sb = new StringBuilder();
         
         sb.AppendLine(...);

         cmd.CommandText = sb.ToString();
         return cmd;
     }
     ```


## Գեներատորի փոփոխություններ 
Գեներատորի կողմից ավտոմատ գեներացված կոդում փոփոխություններ կարելի է կատարել հետևյալ հատկությունների միջոցով.

* Սյունակների հատկություններ
    * `CSType` C# կոդի մեջ սյունակի տիպ ([մանրամասն](../column.md#շարահյուսություն))։
    * `Nullable` C# կոդի մեջ սյունակի տիպի `null` արժեք ընդունելու հատկություն ([մանրամասն](../column.md#շարահյուսություն))։
    * `RTrim` տողային տիպի սյունակների վերջին բացակների հեռացնելու հայտանիշ ([մանրամասն](../column.md#շարահյուսություն))։
* Պարամետրերի հատկություններ
    * `CSType` C# կոդի մեջ պարամետրի տիպ ([մանրամասն](../Param.md#շարահյուսություն))։
    * `Nullable` C# կոդի մեջ պարամետրի տիպի `null` արժեք ընդունելու հատկություն ([մանրամասն](../Param.md#շարահյուսություն))։