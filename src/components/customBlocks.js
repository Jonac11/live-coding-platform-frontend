import Blockly from 'blockly';

Blockly.Blocks['move_forward'] = {
    init: function () {
        this.appendDummyInput().appendField('Move Forward');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip('Moves the car forward.');
        this.setHelpUrl('');
    },
};

Blockly.JavaScript['move_forward'] = function (block) {
    return 'moveForward();\n';
};
