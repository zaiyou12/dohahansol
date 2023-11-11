<script lang="ts">
	import Modal from '$lib/modal.svelte'

  const subTitle = "Contact"
  const title = "마음 전하실 곳";
  const desc = "작은 결혼식을 올리게 되어<br/>감사한 모든 분들을 모시지 못하는 점<br/>너그러운 양해를 구합니다.<br/><br/>마음으로 축복해 주시면<br/>더없는 기쁨으로 간직하고<br/>서로 아끼며 살겠습니다."
  const account_1 = "1002-293-182182";
  const account_2 = "851201-04-055786";

  let open = false

  function openDialog(event: MouseEvent) { open = true }
  function closeDialog(event: MouseEvent) { open = false }

  const onCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(()=> alert('계좌번호가 복사되었습니다'))
  }
</script>

<div class="section bg-white">
  <div class="text-wrapper">
    <p class="sub-title">{ subTitle }</p>
    <h2 class="mt-2">{ title }</h2>
    <p class="mt-10 body">{@html desc }</p>
    <p class="mt-6 small">* 축하 화환은 정중히 사양합니다.</p>
    <p class="mt-10 body font-bold">소창열 · 배동옥의   아들   소재우</p>
    <p class="mt-2 body font-bold">배종호 · 이영란의   딸    배채연</p>
  </div>
  <div class="flex justify-center mt-8">
    <button class="max-w-md" on:click={openDialog}>{" "}전달하기{" "}</button>
  </div>
  <Modal {open} {title} {subTitle} {closeDialog}>
    <div class="flex flex-row mt-4 justify-center items-center gap-x-2">
      <p><strong>신랑측:</strong>{"\n"}배동옥 우리</p>
      <button on:click={() => onCopy(account_1)}>
        {account_1}
      </button>
      <button class="p-0" on:click={() => onCopy(account_1)}>
        <img class="w-4" src="/imgs/copy.svg" alt="copy button" />
      </button>
    </div>
    <div class="flex flex-row mt-4 justify-center items-center gap-x-2">
      <p><strong>신부측:</strong>{"\n"}이영란 국민</p>
      <button on:click={() => onCopy(account_2)}>
        {account_2}
      </button>
      <button class="p-0" on:click={() => onCopy(account_2)}>
        <img class="w-4" src="/imgs/copy.svg" alt="copy button" />
      </button>
    </div>
  </Modal>
</div>

<style lang="postcss">
button {
  @apply flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
}
</style>