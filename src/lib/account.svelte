<script lang="ts">
	import Modal from '$lib/modal.svelte'

  const title = "마음 전하실 곳";
  const desc = "참석이 어려우신 혼주측 하객분들을 위해 마음 전할 곳을 남깁니다."
  const account_1 = "1002-293-182182";
  const account_2 = "8512-0104-055786";

  let open = false

  function openDialog(event: MouseEvent) { open = true }
  function closeDialog(event: MouseEvent) { open = false }

  const onCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(()=> alert('계좌번호가 복사되었습니다'))
  }
</script>

<div class="section bg-white">
  <div class="text-wrapper">
    <p class="sub-title">Contact</p>
    <h2 class="mt-2">{title}</h2>
    <p class="mt-10 body">{desc}</p>
  </div>
  <div class="flex justify-center mt-4">
    <button class="max-w-md" on:click={openDialog}>{" "}전달하기{" "}</button>
  </div>
  <Modal {open} {title} {closeDialog}>
    <div class="flex flex-row mt-4 justify-center items-center gap-x-2">
      <p><strong>신랑측 혼주:</strong> 배동옥 우리</p>
      <button on:click={() => onCopy(account_1)}>
        {account_1}
      </button>
      <button class="p-0" on:click={() => onCopy(account_1)}>
        <img class="w-10 p-2" src="/imgs/copy.svg" alt="copy button" />
      </button>
    </div>
    <div class="flex flex-row mt-4 justify-center items-center gap-x-2">
      <p><strong>신부측 혼주:</strong> 배종호 이영란 국민</p>
      <button on:click={() => onCopy(account_2)}>
        {account_2}
      </button>
      <button class="p-0" on:click={() => onCopy(account_2)}>
        <img class="w-10 p-2" src="/imgs/copy.svg" alt="copy button" />
      </button>
    </div>
    <p class="mt-4">{desc}</p>
  </Modal>
</div>

<style lang="postcss">
button {
  @apply flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
}
</style>