//! Eternal loop, if GPS is not enabled.

use super::*;

impl StateMachine for OpenStratos<EternalLoop> {
    type Next = OpenStratos<ShutDown>;

    fn execute(self) -> Result<Self::Next> {
        unimplemented!()
    }
}
