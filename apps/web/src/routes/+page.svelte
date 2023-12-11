<script lang="ts">
  import { TextLink, H2, H3, Ul, InlineUl, Li, Meta } from 'ui';
  import Link from './Link.svelte';

  $: meta = {
    type: 'website',
    title: 'usagizmo.com',
    canonical: 'https://usagizmo.com',
  } as const;
</script>

<Meta {...meta} />

<div class="mx-auto max-w-prose">
  <h1 class="text-4xl font-bold">usagizmo</h1>

  <main>
    <section class="mt-12">
      <H2>Profile</H2>

      <H3>Web Engineer</H3>
      <p class="text-subtext">
        After working as a full stack engineer, I settled down as a front-end engineer.
      </p>

      <div class="h-4" />

      <InlineUl>
        <Link name="@Rabi Inc." href="https://rabi.co.jp" />
      </InlineUl>

      <H3>Love</H3>
      <InlineUl>
        <Link name="Svelte" href="https://svelte.dev/" />
        <Link name="Tailwind CSS" href="https://tailwindcss.com/" />
        <Link name="Obsidian" href="https://obsidian.md/" />
      </InlineUl>

      <H3>Works</H3>
      <Ul>
        <Li>
          <strong>
            <TextLink href="https://github.com/usagizmo/webapp-template">webapp-template</TextLink>
          </strong>:
          <span class="max-md:ml-4 max-md:mt-1 max-md:block"
            >Monorepo template for Web Development</span
          >
        </Li>
        <Li>
          <strong>
            <TextLink href="https://github.com/usagizmo/usagizmo.com">usagizmo.com</TextLink>
          </strong>:
          <span class="max-md:ml-4 max-md:mt-1 max-md:block">This site</span>
        </Li>
      </Ul>

      <H3>SNS</H3>
      <p>
        <strong>Twitter</strong>: <TextLink href="https://twitter.com/usagizmo">@usagizmo</TextLink>
      </p>

      <div class="h-1" />

      <InlineUl>
        <Link name="GitHub" href="https://github.com/usagizmo" />
        <Link name="Zenn" href="https://zenn.dev/usagizmo" />
        <Link name="Qiita" href="https://qiita.com/usagizmo" />
      </InlineUl>
    </section>

    <section class="mt-12">
      <H2>Uses</H2>

      <H3>Devices</H3>
      <InlineUl>
        <Link
          name="Keychron Q11"
          href="https://www.keychron.com/products/keychron-q11-qmk-custom-mechanical-keyboard"
        />
        <Link
          name="Dell U4021QW"
          href="https://www.dell.com/ja-jp/shop/dell-u4021qw-40%E3%82%A4%E3%83%B3%E3%83%81%E3%83%AF%E3%82%A4%E3%83%89%E6%9B%B2%E9%9D%A2usb-c-hub-%E3%83%A2%E3%83%8B%E3%82%BF-5k2k-21-9-ips%E9%9D%9E%E5%85%89%E6%B2%A2-tbhdmix2dprj45-%E9%AB%98%E3%81%95%E8%AA%BF%E6%95%B4/apd/210-aypy/%E3%83%A2%E3%83%8B%E3%82%BF%E3%83%BC-%E3%83%A2%E3%83%8B%E3%82%BF%E3%83%BC%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B5%E3%83%AA%E3%83%BC"
        />
        <Link
          name="Expert Mouse"
          href="https://www.kensington.com/ja-jp/p/%E8%A3%BD%E5%93%81/%E3%82%B3%E3%83%B3%E3%83%88%E3%83%AD%E3%83%BC%E3%83%AB/%E3%83%88%E3%83%A9%E3%83%83%E3%82%AF%E3%83%9C%E3%83%BC%E3%83%AB/%E3%82%A8%E3%82%AD%E3%82%B9%E3%83%91%E3%83%BC%E3%83%88%E3%83%9E%E3%82%A6%E3%82%B9-%E3%83%AF%E3%82%A4%E3%83%A4%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%83%E3%82%AF%E3%83%9C%E3%83%BC%E3%83%AB/"
        />
        <Link name="Google Pixel" href="https://store.google.com/jp/category/phones" />
        <Link name="MacBook Pro" href="https://www.apple.com/macbook-pro/" />
        <Link
          name="noblechairs"
          href="https://www.noblechairs.com/en-us/icon-series/gaming-chair-pu-leather?attribute%5Bcolor%5D=White%20/%20Black"
        />
        <Link name="OpenRun Pro" href="https://jp.shokz.com/products/openrun-pro" />
        <Link name="Loupedeck Live" href="https://loupedeck.com/jp/products/loupedeck-live/" />
      </InlineUl>

      <H3>Setapp</H3>
      <InlineUl>
        <Link name="Bartender" href="https://www.macbartender.com/" />
        <Link name="CleanMyMac X" href="https://macpaw.com/cleanmymac" />
        <Link name="CleanShot X" href="https://cleanshot.com/" />
        <Link name="Dash" href="https://kapeli.com/dash" />
        <Link name="DevUtils" href="https://devutils.app/" />
        <Link name="ForkLift" href="https://binarynights.com/" />
        <Link name="Magic Window Air" href="https://www.jetsoncreative.com/aerial" />
        <Link name="Marked" href="https://marked2app.com/" />
        <Link name="MetaImage" href="https://neededapps.com/metaimage/" />
        <Link name="Mission Control Plus" href="https://www.fadel.io/missioncontrolplus" />
        <Link name="Paste" href="https://pasteapp.io/" />
        <Link name="RapidAPI" href="https://paw.cloud/" />
        <Link name="Session" href="https://www.stayinsession.com/" />
        <Link name="SnippetsLab" href="https://www.renfei.org/snippets-lab/" />
        <Link name="Soulver" href="https://soulver.app/" />
        <Link name="Spark" href="https://sparkmailapp.com/" />
        <Link name="Timing" href="https://timingapp.com/" />
        <Link name="WiFi Explorer" href="https://www.intuitibits.com/products/wifiexplorer/" />
      </InlineUl>

      <H3>Apps</H3>
      <InlineUl>
        <Link name="1Password" href="https://1password.com/" />
        <Link name="Boxy SVG" href="https://boxy-svg.com/" />
        <Link name="CotEditor" href="https://coteditor.com/" />
        <Link name="Cursor" href="https://cursor.sh/" />
        <Link name="DaisyDisk" href="https://daisydiskapp.com/" />
        <Link name="DeepL" href="https://www.deepl.com/translator" />
        <Link name="Display Menu" href="http://displaymenu.milchimgemuesefach.de/" />
        <Link name="Dropbox" href="https://www.dropbox.com/" />
        <Link name="Dropshelf" href="https://pilotmoon.com/dropshelf/" />
        <Link name="Figma" href="https://www.figma.com/" />
        <Link name="Gestimer" href="https://apps.apple.com/jp/app/gestimer/id990588172" />
        <Link name="Integrity plus" href="https://peacockmedia.software/mac/integrity-plus/" />
        <Link name="iTerm" href="https://iterm2.com/" />
        <Link name="Kaleidoscope" href="https://kaleidoscope.app/" />
        <Link name="Karabiner-Elements" href="https://karabiner-elements.pqrs.org/" />
        <Link name="Keka" href="https://www.keka.io/" />
        <Link name="Notion" href="https://www.notion.so/" />
        <Link name="Obsidian" href="https://obsidian.md/" />
        <Link name="Pixelmator Pro" href="https://www.pixelmator.com/pro/" />
        <Link name="Raycast" href="https://www.raycast.com/" />
        <Link name="Setapp" href="https://setapp.com/" />
        <Link name="Sidekick" href="https://www.meetsidekick.com/" />
        <Link name="Sublime Merge" href="https://www.sublimemerge.com/" />
        <Link name="Sublime Text" href="https://www.sublimetext.com/" />
        <Link name="Todoist" href="https://todoist.com/" />
        <Link name="Visual Studio Code" href="https://code.visualstudio.com/" />
      </InlineUl>

      <H3>VS Code Extensions</H3>
      <InlineUl>
        <Link
          name="Auto Rename Tag"
          href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"
        />
        <Link
          name="Batch Rename"
          href="https://marketplace.visualstudio.com/items?itemName=JannisX11.batch-rename-extension"
        />
        <Link
          name="Better Comments"
          href="https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments"
        />
        <Link
          name="Bookmarks"
          href="https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks"
        />
        <Link
          name="Calculator"
          href="https://marketplace.visualstudio.com/items?itemName=lixquid.calculator"
        />
        <Link
          name="change-case"
          href="https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case"
        />
        <Link
          name="Code Spell Checker"
          href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker"
        />
        <Link
          name="colorize"
          href="https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize"
        />
        <Link
          name="Edit csv"
          href="https://marketplace.visualstudio.com/items?itemName=janisdd.vscode-edit-csv"
        />
        <Link
          name="EditorConfig for VS Code"
          href="https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig"
        />
        <Link
          name="Emmet Keybindings"
          href="https://marketplace.visualstudio.com/items?itemName=agutierrezr.emmet-keybindings"
        />
        <Link
          name="Error Lens"
          href="https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens"
        />
        <Link
          name="ESLint"
          href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
        />
        <Link
          name="GitHub Copilot"
          href="https://marketplace.visualstudio.com/items?itemName=GitHub.copilot"
        />
        <Link
          name="GitHub Pull Requests and Issues"
          href="https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github"
        />
        <Link
          name="GitLens — Git supercharged"
          href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"
        />
        <Link
          name="HTMLHint"
          href="https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint"
        />
        <Link
          name="Image preview"
          href="https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview"
        />
        <Link
          name="Increment Selection"
          href="https://marketplace.visualstudio.com/items?itemName=albymor.increment-selection"
        />
        <Link
          name="Markdown Preview Mermaid Support"
          href="https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid"
        />
        <Link
          name="Material Icon Theme"
          href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme"
        />
        <Link
          name="Mermaid Markdown Syntax Highlighting"
          href="https://marketplace.visualstudio.com/items?itemName=bpruitt-goddard.mermaid-markdown-syntax-highlighting"
        />
        <Link
          name="multi-command"
          href="https://marketplace.visualstudio.com/items?itemName=ryuta46.multi-command"
        />
        <Link
          name="Node.js Notebooks (REPL)"
          href="https://marketplace.visualstudio.com/items?itemName=donjayamanne.typescript-notebook"
        />
        <Link
          name="One Monokai Theme"
          href="https://marketplace.visualstudio.com/items?itemName=azemoh.one-monokai"
        />
        <Link
          name="Open in Marked 2"
          href="https://marketplace.visualstudio.com/items?itemName=fmoronzirfas.open-in-marked"
        />
        <Link
          name="Partial Diff"
          href="https://marketplace.visualstudio.com/items?itemName=ryu1kn.partial-diff"
        />
        <Link
          name="Path Intellisense"
          href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense"
        />
        <Link
          name="Prettier - Code formatter"
          href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
        />
        <Link
          name="quickOpenSelection"
          href="https://marketplace.visualstudio.com/items?itemName=finico.quickOpenSelection"
        />
        <Link
          name="Rainbow CSV"
          href="https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv"
        />
        <Link
          name="Relative Line Numbers"
          href="https://marketplace.visualstudio.com/items?itemName=extr0py.vscode-relative-line-numbers"
        />
        <Link
          name="SonarLint"
          href="https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode"
        />
        <Link
          name="Svelte for VS Code"
          href="https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode"
        />
        <Link
          name="Tailwind CSS IntelliSense"
          href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
        />
        <Link
          name="Text Tables"
          href="https://marketplace.visualstudio.com/items?itemName=RomanPeshkov.vscode-text-tables"
        />
        <Link
          name="Todo Tree"
          href="https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree"
        />
        <Link
          name="Trailing Spaces"
          href="https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces"
        />
        <Link
          name="Turbo Console Log"
          href="https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log"
        />
        <Link
          name="Unique Lines"
          href="https://marketplace.visualstudio.com/items?itemName=bibhasdn.unique-lines"
        />
        <Link name="Vim" href="https://marketplace.visualstudio.com/items?itemName=vscodevim.vim" />
        <Link
          name="Vitest"
          href="https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer"
        />
        <Link
          name="vscode-input-sequence"
          href="https://marketplace.visualstudio.com/items?itemName=tomoki1207.vscode-input-sequence"
        />
        <Link
          name="webhint"
          href="https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint"
        />
        <Link
          name="テキスト校正くん"
          href="https://marketplace.visualstudio.com/items?itemName=ICS.japanese-proofreading"
        />
      </InlineUl>
    </section>
  </main>
</div>
