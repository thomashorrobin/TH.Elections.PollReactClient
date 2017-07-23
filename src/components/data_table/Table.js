import React from 'react';

 export default function Table(props){
    let polls = props.polls.map((p, i) => <PollRecord key={i} parties={props.parties} poll={p} />) ;
    let partyHeaders = props.parties.map((p, i) => <td key={i} style={{ borderBottom: "5px solid " + p.partyColour }}>{ p.partyName }</td>) ;
    return (
        <table>
            <thead>
                <tr>
                    <td>Date</td>
                    <td>Pollster</td>
                    { partyHeaders }
                </tr>
            </thead>
            <tbody>
                { polls }
            </tbody>
        </table>
    );
 }

 function PollRecord(props) {
    let partyHeaders = props.parties.map((p, i) => <td key={i}>{ props.poll.partyVotingIntentions.find(pvi => pvi.partyId === p.partyId).partyVote }</td>) ;
     return (
        <tr>
            <td>{ props.poll.pollDate }</td>
            <td>{ props.poll.pollingCompanyName }</td>
            { partyHeaders }
        </tr>
     )
 }