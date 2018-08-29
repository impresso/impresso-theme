<template lang="html">
  <div>
    <h2 class="small-caps">Components</h2>
    <b-card title="Dropdown">
    <hr>
    <p>Dropdowns work with trigger buttons of all sizes,
      including default and split dropdown buttons</p>
    <b-dropdown id="ddown0" text="outline-primary" size="sm" variant="outline-primary">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Something else here...</b-dropdown-item>
      <b-dropdown-item disabled>Disabled action</b-dropdown-item>
    </b-dropdown>
    <b-dropdown id="ddown-header" text="secondary with headers" size="sm" variant="secondary">
      <b-dropdown-header>Dropdown header</b-dropdown-header>
      <b-dropdown-item-button>First item</b-dropdown-item-button>
      <b-dropdown-item-button>Second Item</b-dropdown-item-button>
      <b-dropdown-header>Another header</b-dropdown-header>
      <b-dropdown-item-button>First item</b-dropdown-item-button>
      <b-dropdown-item-button>Second Item</b-dropdown-item-button>
    </b-dropdown>
    <b-dropdown id="ddown-sm-split"
      size="sm" split text="outline-secondary Split"
      variant="outline-secondary" class="">
      <b-dropdown-item-button>Action</b-dropdown-item-button>
      <b-dropdown-item-button>Another action</b-dropdown-item-button>
      <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
    </b-dropdown>
    <br>
    <small>Use bootstrap element <code>&lt;b-dropdown&gt;</code></small>
    <br>
    <hr>
    <p>Small size <code>size="sm"</code></p>
    <b-dropdown id="" text="Variant primary" size="sm" variant="primary" />
    <b-dropdown id="" text="Variant secondary" size="sm" variant="secondary" />
    <b-dropdown id="" text="Variant success" size="sm" variant="success" />
    <b-dropdown id="" text="Variant warning" size="sm" variant="warning" />
    <b-dropdown id="" text="Variant danger" size="sm" variant="danger" />
    <br><br>
    <p>Medium size <code>size="md"</code></p>
    <b-dropdown id="" text="Dropdown Button" size="md" variant="primary" />
    <b-dropdown id="" text="Dropdown Button" size="md" variant="secondary" />
    <b-dropdown id="" text="Dropdown Button" size="md" variant="success" />
    <b-dropdown id="" text="Dropdown Button" size="md" variant="warning" />
    <b-dropdown id="" text="Dropdown Button" size="md" variant="danger" />
    <br><br>
    <p>Outline and fill-color variants <code>variant="outline-*"</code></p>
    <b-dropdown id="" text="Dropdown Button" size="sm" variant="outline-primary" />
    <b-dropdown id="" text="Dropdown Button" size="sm" variant="outline-secondary" />
    <b-dropdown id="" text="Dropdown Button" size="sm" variant="outline-success" />
    <b-dropdown id="" text="Dropdown Button" size="sm" variant="outline-warning" />
    <b-dropdown id="" text="Dropdown Button" size="sm" variant="outline-danger" />

    <br>
    <hr>
    <p>Use the <code>&lt;label for="id"&gt;</code> element for related text.</p>
    <label for="sel1">Select a vegetable</label>
    <b-dropdown id="sel1" text="potato" variant="outline-primary" size="sm" class="ml-1" />
    <label for="sel1">and a fruit</label>
    <b-dropdown id="sel1" text="apple" variant="outline-primary" size="sm" class="ml-1" />

    </b-card>
    <hr>
    <br><br>

    <p>Icon test : <span class="dripicons-alarm"></span></p>
    <b-card title="Section <code>.search-results-summary</code>">
      <section class="search-results-summary">
        <span class="label">Search Summary <code>.label</code></span>
        <p class="serif">Found <strong>153</strong> pages <a href="fsdf">matching exactly “Indoeuropean”</a> next to “people” published in La Gazette de Lausanne between 19 May 1810 and 01 Jan 1835 or between 20 March 1861 and 30 March March 1861 </p>
      </section>
    </b-card>

  </div>
</template>

<script>
export default {};
</script>

<style lang="css">
</style>
