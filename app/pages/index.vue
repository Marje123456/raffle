<template>
  <div>
    {{ $gettext('hello') }}

    <BButton>Click me</BButton>

    <BAlert :model-value="true">Default Alert</BAlert>
  </div>
</template>
