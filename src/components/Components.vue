<template lang="html">
  <div id="app-content">
    <h2 class="small-caps">Components</h2>
    <b-card title="Dropdown">
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
    <b-card title="Tabs <code>.nav.nav-tabs</code>">

      <!-- Nav tabs -->
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="messages-tab" data-toggle="tab" href="#messages" role="tab" aria-controls="messages" aria-selected="false">Messages</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
        </li>
      </ul>
      <!-- Tab panes -->
      <div class="tab-content py-3">
        <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">home</div>
        <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">Profile</div>
        <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">Messages</div>
      </div>

      <hr>

      <ul class="nav nav-tabs pl-3" role="tablist">
        <li class="nav-item">
          <a class="nav-link small-caps active" data-toggle="tab" href="#tab-1">Active<br>Tab</a>
        </li>
        <li class="nav-item">
          <a class="nav-link small-caps" data-toggle="tab" href="#tab-2">Link<br><code>.small-caps</code></a>
        </li>
      </ul>
    </b-card>

    <hr>

    <h2 class="small-caps">Icons</h2>
    <b-card>
      <p>Dripicons can be referenced with class names as shown below.</p>
      <p>See <a href="http://demo.amitjakhu.com/dripicons/">full reference</a>.</p>
      <p><span class="dripicons-paperclip"></span> <code>.dripicons-paperclip</code></p>
      <p><span class="dripicons-tags"></span> <code>.dripicons-tags</code></p>
      <p><span class="dripicons-to-do"></span> <code>.dripicons-to-do</code></p>
    </b-card>

    <hr>

    <b-card title="Section <code>.textbox-fancy</code>">
      <section class="textbox-fancy">
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
