---
layout: post
title: "The Adventure of the Cardboard Box"
author: "Arthur Conan Doyle"
categories: literature
---

<!-- ---
layout: home
--- -->

## Конфигурационный файл (config.as)

Файл конфигурации предназначен для настройки приложений платформы AS-3X, а именно клиента AS-3X (asbank.exe, 
asbux.exe и т.д.), конфигураторa системы (syscon.exe), редактора сценариев (scriped.exe) и загрузчика новых версий (launcher.exe). Файл состоит из нескольких разделов.


## Раздел Common
предназначен для описания баз данных AS-3X.

## Синтаксис
```
Common {
Description = sDescription;
Language = nLanguage;
Authentication = sAuthentication;
UseWindowsDefaultPrinter = nUseWindowsDefaultPrinter;

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
};
.....
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
};
};
```
<!--
<p>Раздел <strong>Common</strong> состоит из следующих частей:</p>

<table>
    <thead>
        <tr>
            <th>Параметр</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="param">sConfigName</td>
            <td>строковое выражение, описывающее конфигурацию</td>
        </tr>
        <tr>
            <td class="param">sServer</td>
            <td>строковое выражение, задающее SQL сервер</td>
        </tr>
        <tr>
            <td class="param">sDatabase</td>
            <td>строковое выражение, задающее базу данных на сервере</td>
        </tr>
        <tr>
            <td class="param">sBaseFolder</td>
            <td>
                строковое выражение, задающее относительный путь к каталогу, где расположены системные описания. Параметр 
используется конфигуратором системы и редактором сценариев
            </td>
        </tr>
        <tr>
            <td class="param">sBackupFolder</td>
            <td>
                строковое выражение, задающее 
путь к каталогу (shared path), где расположены резервные копии базы данных. 
Параметр используется конфигуратором системы и клиентом AS-3X для задач 
управления резервными копиями.
            </td>
        </tr>
        <tr>
            <td class="param">sSourceConnected</td>
            <td>
                строковое выражение, задающее
                связь с Team Foundation Server. Возможны значения &quot;YES&quot; и &quot;NO&quot;, по
                умолчанию &quot;NO&quot;. Параметр используется редактором сценариев, при значении &quot;YES&quot;
                параметр <var>sBaseFolder</var> должен быть определен
            </td>
        </tr>
        <tr>
            <td class="param">sContext</td>
            <td>
                строковое выражение, задающее 
                контекст приложения. Возможны следующие значения 
                &quot;ASBANK&quot;, &quot;ASENTERPRISE&quot;, &quot;ASWAGES&quot;, &quot;ASMOBILETRADE&quot;.
                Параметр используется редактором сценариев для организации корректной 
                контекстной помощи
            </td>
        </tr>
        <tr>
            <td class="param">sStorePrinterSetting</td>
            <td>
                числовое выражение, задающее 
раздел реестра для сохранения установок принтера. При значении 1 - 
HKEY_CURRENT_USER , а при остальных значениях- HKEY_LOCAL_MACHINE.
            </td>
        </tr>
        <tr>
            <td class="param">sReadOnly</td>
            <td>
                числовое выражение, задающее 
режим работы с базой данных. При значении 1 - подключение к базе данных 
осуществляется в режиме &quot;только для чтения&quot;, а при остальных значениях - в 
режиме &quot;чтения/запись&quot;.<br />
                В режиме &quot;только для чтения&quot; для входа в систему нету необходимости прoизводить 
синхронизацию пользователей с системной таблицей syslogins, это крайне 
удобно в случае работы с реплицированной базой данных.
            </td>
        </tr>
        <tr>
            <td class="param">nLanguage</td>
            <td>
                числовое выражение, задающее 
язык системы. Возможны следующие значения 1 - Армянский, 3 - Английский. 
Значение параметра для клиента AS-3X
    в дальнейшем переопределяется настройкой пользователя
            </td>
        </tr>
        <tr>
            <td class="param">sDescription</td>
            <td>строковое выражение, описание раздела</td>
        </tr>
        <tr>
            <td class="param">sAuthentication</td>
            <td>
                строковое выражение, 
определяющее режим аутентификации приложения. Если значение данного 
параметра равно
                &quot;Windows&quot;, тогда доступ к системе происходит по Windows-логину 
пользователя, в прoтивном случае - по логину SQL Server-а. Все пользователи 
системы должны работать по единой схеме аутентификации.
            </td>
        </tr>
        <tr>
            <td class="param">nUseWindowsDefaultPrinter</td>
            <td>
                числовое выражение, задающее 
режим работы с принтером. При значении 0 - принтер, на котором нужно печатать, 
можно выбрать из настроек программы, а при остальных значениях используется windows default принтер.<br/>
                По умолчанию принимает значение 0.
            </td>
        </tr>
    </tbody>
</table>

<h2>Отделение BaseFolder</h2>
<p>
    Для работы с большим количеством проектов и баз данных
    дана возможность отделения BaseFolder-ов от конфигураций баз данных.<br />
    При отделении конфигуратор системы(SysCon.exe) и редактор сценариев(Scriped.exe) 
    работают уже с отделёнными BaseFolder-ми.
</p>

<h2>Синтаксис</h2>

<pre><code><strong>Common</strong> {
...
<strong>BaseFolder</strong> {
    <strong>Path</strong> = <em>sBaseFolder1</em>;
    <strong>SS</strong> = <em>sSourceConnected1</em>;
    <strong>Context</strong> = <em>sContext1</em>;
};
.....
<strong>BaseFolder</strong> {
    <strong>Path</strong> = <em>sBaseFolderN</em>;
    <strong>SS</strong> = <em>sSourceConnectedN</em>;
    <strong>Context</strong> = <em>sContextN</em>;
};
};</code></pre>

<p>Параметры те же самые, что и в конфигурациях</p>

<h2>Раздел Launcher</h2>
<p>
    предназначен для описания 
файлов, обновление которых может быть произведено с сервера базы данных. 
Данный раздел используется конфигуратором системы и загрузчиком новых версий.
</p>

<h2>Синтаксис</h2>

<pre><code><strong>Launcher</strong> {
<strong>Description</strong> = <em>sDescription</em>;
<strong>Server</strong> = <em>sServer</em>;
<strong>Database</strong> = <em>sDataBase</em>;
<strong>Update</strong> { <strong>Name</strong> = <em>sFileName1</em>; <strong>[="SELFREG";]</strong> };
. . . . .
<strong>Update</strong> { <strong>Name</strong> = <em>sFileNameM</em>; <strong>[="SELFREG";]</strong> };
};</code></pre>

<p>Раздел <strong>Launcher</strong> состоит из следующих частей:</p>

<table>
    <thead>
        <tr>
            <th>Параметр</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="param">sServer</td>
            <td>строковое выражение, задающее SQL сервер</td>
        </tr>
        <tr>
            <td class="param">sDataBase</td>
            <td>
                строковое выражение, задающее базу данных на сервере.
                <br />
                При отсутствии используется первая база данных в кофигурациях с заданного сервера.
            </td>
        </tr>
        <tr>
            <td class="param">sFileName</td>
            <td>строковое выражение, задающее относительный путь к файлу</td>
        </tr>
        <tr>
            <td class="param">sBaseFolder</td>
            <td>
                строковое выражение, задающее 
относительный путь к каталогу, где расположены системные описания. Параметр 
используется конфигуратором системы и редактором сценариев
            </td>
        </tr>
        <tr>
            <td><strong>SELFREG</strong></td>
            <td>
                необязательное поле, задаваемое 
при необходимости регистрации обновленного файла, используется для 
регистрации OLE серверов.
            </td>
        </tr>
    </tbody>
</table>

<p>
    <strong>Примечание. </strong>Если для файла невозможно 
определить версию возможностями операционной системы, то используется файл с 
расширением .ver и тем же именем. Например, для файла <strong>asolap.xla</strong> файл <strong>asolap.ver</strong>
    может иметь следующее содержание:
</p>

<blockquote>
    <p>
        1.2.1.30<br />
        Armenian Software<br />
        AS3XX Kernel with Bank extension<br />
        Copyright . 1997-2000, Armenian Software, Ltd.<br />
    </p>
</blockquote>

<h2>Раздел Scriped</h2>
<p>предназначен для задания конфигурации редактора сценариев.</p>

<h2>Синтаксис</h2>

<pre><code><strong>Scriped</strong> {
<strong>TFS</strong> = <em>sTfsUrl</em>;
};</code></pre>


<p>Раздел <strong>Scriped</strong> состоит из следующих частей:</p>

<table>
    <thead>
        <tr>
            <th>Параметр</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="param">sTfsUrl</td>
            <td>строковое выражение, задающее web адресс репозитария в Team Foundation Server</td>
        </tr>
    </tbody>
</table>

<h4>Примечание</h4>

<p>
    См. также<br />
    <a href="GlobalConfig.htm">Глобальный конфигурационный файл</a>
</p>
-->