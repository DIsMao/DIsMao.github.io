<?php
   
   echo '<?xml version="1.0"?>';

   ?>
    <rss version="2.0">
          <channel>
          <title>Название RSS-канала</title>
          <link>https://dismao.github.io/</link>
          <description>Описание канала (кратко)</description>

          <item>
            <title>$title2</title>
            <link>ссылка на статью</link>
            <description>$text2</description>
            <author>$author</author>
            <pubDate>Thu, 23 Jun 2023 12:22:18 GMT</pubDate>
            <guid>2</guid>
         </item>
             
          <item>
            <title>$title</title>
            <link>ссылка на статью</link>
            <description>$text</description>
            <author>$author</author>
            <pubDate>Thu, 22 Jun 2023 11:29:18 GMT</pubDate>
            <guid>1</guid>
         </item>
        

        </channel>
   </rss>

   <?php
   
   header('Content-Type: text/xml; charset=utf-8');

   ?>
