module.exports = {

  new: function (req, res) {
    // Employee.findOrCreate({
    //   organization: req.user.organization,
    //   email       : req.query.invitee
    // }).exec(
    //
    //   function (error, createdOrFoundRecords) {
    //     console.log(error || createdOrFoundRecords);
    //     Invite.findOrCreate({
    //       organization: req.user.organization,
    //       inviter     : req.user.id,
    //       invitee     : createdOrFoundRecords.id
    //     }).exec(
    //
    //       function (error, createdOrFoundRecords) {
    //         console.log(error || createdOrFoundRecords);
    //       });
    //   });

    EmailService.sendInvite(req.query.invitee, req.user, function callback(error, info) {
      if (error) {
        return res.send(500, error);
      } else {
        return res.send(200, info);
      }
    });
  }

};
