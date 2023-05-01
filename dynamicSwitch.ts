
class Switch {
    conditions: Array<{condition: boolean, callback: ()=> void}> = [];

    addCondition(condition: boolean, callback: ()=> void) {
      this.conditions.push({ condition, callback });
    }
    isValid() {
      if (this.conditions.length > 0) {
        this.conditions.map((e) => {
          console.log(e.condition);
          e.condition ? e.callback() : false;
        });
        this.conditions = [];
        return this.conditions

      }
      else {
        return 'Conditions array is empty'
      }
      
    }
  
    isEmpty() {
      !this.conditions.length ? true : false;
    }
  }