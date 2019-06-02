/*
	NX Cash Selling NPC
	By V1ral from www.ancient-ms.net
	Put it as any NPC you have free.
	Change prices and ammounts to your liking
*/
function start() {
	cm.sendSimple ("Welcome, I'm the NX Prepaid Trader.\r\n#r#L0##eTrade#v4001168# for 1000NX Prepaid#n#l\r\n#k#L1##eTrade 1000NX Prepaid for#v4001168##n#l#k")
	}

function action(mode, type, selection) {
		cm.dispose();

	switch(selection){
		case 0: 
			if(cm.haveItem(4001168, 1)) {
			cm.sendOk("Your leaf have been redeemed! And in return I gave you 1000 nx points!")
			cm.gainItem(4001168, -1);
			cm.getPlayer().getCashShop().gainCash(4, 10000);
			cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have earned " + 1000 + " NX"));
			cm.dispose();
			} else {
				cm.sendOk("#eYou need #v4001168#\r\nPlease check your inventory and come talk to me again when you have one.")
				cm.dispose();	
			}
		break;
		case 1: 
			if (cm.getPlayer().getCashShop().getCash(4) >= 10000 && cm.canHold(4001168)) {
			cm.gainItem(4001168, 1);
            cm.getPlayer().getCashShop().gainCash(4, -10000);
			cm.sendOk("Your nx have been redeemed! And in return I gave you 1 maple leaf!#k");
            cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have earned " + -1000 + " NX"));
            cm.dispose();			
			}
			else{	
				cm.sendOk("you don't have enough!");
				cm.dispose();
			}	
		
		}
	}