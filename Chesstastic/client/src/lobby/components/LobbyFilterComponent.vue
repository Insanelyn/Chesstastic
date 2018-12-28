<template>
  <body>
    <div class="container">
      <div class="exit pull-right">
        <i class="fa fa-times"></i>
      </div>
      <h1>This is a Lobby Filter Component</h1>
      <table>
        <tbody>
          <tr class="variant">
            <td>Variant</td>
            <td class="first-section">
              <div class="checkable">
                <label class="hover" title="Standard rules of chess (FIDE)"><input type="checkbox" name="variant[0]" value="1"  >Standard</label>
              </div>
              <div class="checkable"><label class="hover" title="Captured pieces can be dropped back on the board instead of moving a piece."><input type="checkbox" name="variant[1]" value="10"  >Crazyhouse</label>
              </div>
              <div class="checkable"><label class="hover" title="Starting position of the home rank pieces is randomized."><input type="checkbox" name="variant[2]" value="2"  >Chess960</label>
              </div>
            </td>

            <td>
              <div class="checkable"><label class="hover" title="Bring your King to the center to win the game."><input type="checkbox" name="variant[3]" value="4"  >King of the Hill</label>
              </div>
              <div class="checkable"><label class="hover" title="Check your opponent 3 times to win the game."><input type="checkbox" name="variant[4]" value="5"  >Three-check</label>
              </div>
              <div class="checkable"><label class="hover" title="Lose all your pieces (or get stalemated) to win the game."><input type="checkbox" name="variant[5]" value="6"  >Antichess</label>
              </div>
            </td>

            <td>
              <div class="checkable"><label class="hover" title="Nuke your opponent's king to win."><input type="checkbox" name="variant[6]" value="7"  >Atomic</label>
              </div>
              <div class="checkable"><label class="hover" title="Destroy the horde to win!"><input type="checkbox" name="variant[7]" value="8"  >Horde</label>
              </div>
              <div class="checkable"><label class="hover" title="Race your King to the eighth rank to win."><input type="checkbox" name="variant[8]" value="9"  >Racing Kings</label>
              </div>
            </td>
          </td>
        </tr>

        <tr>
          <td>Tidskontroll</td>
          <td>
            <div class="checkable"><label class="hover"><input type="checkbox" name="speed[0]" value="1">Bullet - Mindre än 3 minuter</label>
            </div>
            <div class="checkable"><label class="hover"><input type="checkbox" name="speed[1]" value="2"  >Blitz - Mindre än 8 minuter</label>
            </div>
            <div class="checkable"><label class="hover"><input type="checkbox" name="speed[2]" value="5"  >Rapid - Mindre än 25 minuter</label>
            </div>
            <div class="checkable"><label class="hover"><input type="checkbox" name="speed[3]" value="3"  >Classical - Mindre än 360 minuter</label>
            </div>
          </td>
        </tr>

      </tbody>
    </table>
    <div class="row">

    <div class="actions">
      <button type="submit" class="reset button text"><i class="fa fa-step-backward"></i>Återställ</button>
      <button type="submit" class="submit button text"><i class="fa fa-check"></i>Använd</button>
    </div>
  </div>
  </div>

</body>

</template>

<script>
export default {
  data() {
    return {
    }
  },
  created() {

  },
}
</script>

<style scoped>
.container{
  background-color: lightgrey;

}
.exit:hover{
  color:red;
}
.actions{
  
}
</style>
