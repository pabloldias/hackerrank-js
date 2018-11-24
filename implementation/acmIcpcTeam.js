function acmTeam(topic) {
    const topics = topic.map(item => Array.from(item).map(knowledge => knowledge === '1'));
    
    let maxTopics = -1;
    let teamCount = 0;

    topics.forEach((person1, index1) => {
        topics.filter((person2, index2) => index2 > index1)
            .forEach(person2 => {
                const count = person1
                    .map((knowledge, index) => knowledge || person2[index])
                    .filter(knowledge => knowledge)
                    .length;
                
                if (count > maxTopics) {
                    maxTopics = count;
                    teamCount = 1; 
                } else if (count === maxTopics) {
                    teamCount++;
                }
            });
    });

    return [maxTopics, teamCount];
}
module.exports = acmTeam;