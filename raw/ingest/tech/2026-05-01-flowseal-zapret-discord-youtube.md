<!-- GitHub Trending: Batchfile | 26,955 stars | +165 today -->

# Flowseal/zapret-discord-youtube

> No description

## Repository Info
- **URL**: https://github.com/Flowseal/zapret-discord-youtube
- **Stars**: 26,955
- **Forks**: 2,105
- **Language**: Batchfile
- **License**: Other
- **Created**: 2024-10-08
- **Updated**: 2026-05-01
- **Topics**: N/A
- **Open Issues**: 1416

## README (excerpt)
<div align="center">

# <img src="https://cdn-icons-png.flaticon.com/128/5968/5968756.png" height=28 /> <a href="https://github.com/Flowseal/">Flowseal</a><a href="https://github.com/Flowseal/zapret-discord-youtube">/zapret-discord-youtube</a> <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" height=28 />

**NEW**: Ускорение Telegram Desktop - https://github.com/Flowseal/tg-ws-proxy  
Альтернатива https://github.com/bol-van/zapret-win-bundle  
Также вы можете материально поддержать оригинального разработчика zapret [тут](https://github.com/bol-van/zapret?tab=readme-ov-file#%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D1%82%D1%8C-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D0%B0)
</div>

> [!CAUTION]
>
> ### ФЕЙКИ
> Я не веду никакие другие страницы/группы в телеграм/ютуб каналы  
> Если вы наткнулись на что-то вне этой страницы гитхаба, что распространяется от моего лица - **ФЕЙК**.

> [!WARNING]
>
> ### АНТИВИРУСЫ
> WinDivert может вызвать реакцию антивируса.
> WinDivert - это инструмент для перехвата и фильтрации трафика, необходимый для работы zapret.
> Замена iptables и NFQUEUE в Linux, которых нет под Windows.
> Он может использоваться как хорошими, так и плохими программами, но сам по себе не является вирусом.
> Драйвер WinDivert64.sys подписан для возможности загрузки в 64-битное ядро Windows.
>
> **Выдержка из [`readme.md`](https://github.com/bol-van/zapret-win-bundle/blob/master/readme.md#%D0%B0%D0%BD%D1%82%D0%B8%D0%B2%D0%B8%D1%80%D1%83%D1%81%D1%8B) репозитория [bol-van/zapret-win-bundle](https://github.com/bol-van/zapret-win-bundle)*
>
> Некоторые антивирусы склонны относить файлы WinDivert к классам повышенного риска или хакерским инструментам. Происходит удаление файла и помещение его в карантин. При этом детект обязательно имеет название `WinDivert` или `Not-a-virus:RiskTool.Multi.WinDivert`
>
> В случае проблем с антивирусом добавьте папку с запретом в исключения, либо отключите детектирование PUA (потенциально нежелательных приложений). Например, в касперском есть галочка "Обнаруживать легальные приложения, которые злоумышленники часто используют для нанесения вреда". При аккуратной и правильной настройке исключений - рекомендуется настроить исключение, но если вы не до конца понимаете что делаете - рекомендуется отключить детект PUA.

> [!IMPORTANT]
> Все бинарные файлы в папке [`bin`](./bin) взяты из [zapret-win-bundle/zapret-winws](https://github.com/bol-van/zapret-win-bundle/tree/master/zapret-winws) и [zapret/releases](https://github.com/bol-van/zapret/releases). Вы можете это проверить с помощью хэшей/контрольных сумм. Проверяйте, что запускаете, используя сборки из интернета!

## ⚙️Использование

1. Включите Secure DNS
    * В Chrome - "Использовать безопасный DNS", и выбрать поставщика услуг DNS (выбрать вариант, отличный от поставщика по умолчанию)
    * В Firefox - "Включить DNS через HTTPS, используя: Максимальную защиту", затем "Выбрать поставщика" и вписать URL поставщика вручную, например можно использовать `https://dns.google/dns-query` (т.к. поставщик Cloudflare может быть заблокирован)
    * В Windows 11 поддерживается включение Secure DNS прямо в настройках ОС - [инструкция тут](https://www.howtogeek.com/765940/how-to-enable-dns-over-https-on-windows-11/). Рекомендуется, если вы пользуетесь Windows 11

2. Скачайте архив (zip/rar) со [страницы последнего релиза](https://github.com/Flowseal/zapret-discord-youtube/releases/latest)

3. Зайдите в свойства скачанного архива и поставьте галочку "Разблокировать". Если вы используете архиватор 7-Zip или PeaZip, этот шаг можно пропустить

4. Распакуйте содержимое архива по пути, который не содержит кириллицу/спец. символы

5. Запустите нужный файл

## ℹ️Краткие описания файлов

- [**`general.bat ...`**](./general.bat) - запуск стратегии вручную

  Запуск вручную можно использовать для проверки работоспособности стратегий. Работоспособность той или иной стратегии зависит от многих факторов. **Пробуйте разные стр