<script>
  export let value = null;
  export let disabled = false;
  export let group = null;
</script>

<label class="sd-radio-container" class:sd-disabled={disabled}>
  <input type="radio" bind:group {value} {disabled} />
  <span
    class="sd-radio-bullet"
    class:sd-radio-circle-disabled={disabled}
    class:sd-radio-circle={!disabled}
  >
    <span class="sd-radio-bulle-inside" />
  </span>
  <span class="sd-radio-label"><slot /></span>
</label>

<style>
  .sd-radio-container {
    position: relative;
    padding-left: 24px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 16px;
    width: 50px;
    height: 30px;
  }

  .sd-radio-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .sd-radio-bullet {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    border-radius: 50px;
    border: 1px solid var(--sd-black);
  }

  .sd-radio-container input:checked ~ .sd-radio-bullet {
    background-color: var(--sd-primary);
    border-color: var(--sd-primary);
    animation: border 1s;
  }

  .sd-radio-container input:disabled ~ .sd-radio-bullet {
    background-color: var(--sd-grey);
    border-color: var(--sd-grey);
  }

  .sd-radio-bullet:after {
    content: '';
    position: absolute;
    display: none;
  }

  .sd-radio-container input:checked ~ .sd-radio-bullet:after {
    display: block;
  }

  .sd-radio-container .sd-radio-bullet:after {
    left: 3px;
    top: 3px;
    width: 10px;
    height: 10px;
    border-radius: 4px;
    background: var(--sd-white);
  }

  .sd-radio-circle {
    border: 2px solid var(--sd-grey);
    border-radius: 4px;
  }

  .sd-radio-circle-disabled {
    border: 2px solid var(--sd-grey);
    background: grey;
    border-radius: 4px;
  }

  .sd-radio-circle:hover {
    border-left-color: var(--sd-primary);
    border-bottom-color: var(--sd-primary);
    border-right-color: var(--sd-primary);
    border-top-color: var(--sd-primary);

    transition: border-left-color 0.1s linear,
      border-bottom-color 0.1s linear 0.1s, border-right-color 0.1s linear 0.2s,
      border-top-color 0.1s linear 0.3s;
  }

  .sd-radio-circle:not(:hover) {
    border-left-color: var(--sd-grey);
    border-bottom-color: var(--sd-grey);
    border-right-color: var(--sd-grey);
    border-top-color: var(--sd-grey);

    transition: border-left-color 0.1s linear,
      border-bottom-color 0.1s linear 0.1s, border-right-color 0.1s linear 0.2s,
      border-top-color 0.1s linear 0.3s;
  }

  .sd-radio-label {
    margin-right: 2px;
    font-size: 16px;
    font-weight: 100;
  }
</style>
