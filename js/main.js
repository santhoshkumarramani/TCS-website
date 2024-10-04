// Create the "Transforming businesses" section
const transformSection = document.createElement('section');
transformSection.classList.add('transform');

// Create and append the heading
const transformHead = document.createElement('div');
transformHead.classList.add('transform_head');
const transformHeading = document.createElement('h2');
transformHeading.textContent = 'Transforming businesses';
transformHead.appendChild(transformHeading);
transformSection.appendChild(transformHead);

// Create container and flex container
const container = document.createElement('div');
container.classList.add('container');
const flexContainer = document.createElement('div');
flexContainer.classList.add('flex_container');

// Array of items for the "Transforming businesses" section
const transformItems = [
    {
        imageSrc: './image/retail-card_Small.jpeg',
        title: 'TCS Help The Co-operative Group Modernize stores and Franchises'
    },
    {
        imageSrc: './image/smart-revised_Small.jpeg',
        title: 'The ACE Platform: An Innovative Approach to Pilot Training Process'
    },
    {
        imageSrc: './image/assessment-Card_Small.jpeg',
        title: 'HOW UK Power Networks Digitised Consent Management and Improved CK'
    }
];

// Function to create each flex item
transformItems.forEach(item => {
    const flexItem = document.createElement('div');
    flexItem.classList.add('flex_items4');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('tranform_image1');

    const img = document.createElement('img');
    img.src = item.imageSrc;

    const editDiv = document.createElement('div');
    editDiv.classList.add('edit');

    const powerDiv = document.createElement('div');
    powerDiv.classList.add('power');
    const powerHeading = document.createElement('h1');
    powerHeading.textContent = item.title;
    powerDiv.appendChild(powerHeading);

    const moreDiv = document.createElement('div');
    moreDiv.classList.add('more');
    const icon = document.createElement('i');
    icon.classList.add('ri-arrow-right-line');
    const readMoreSpan = document.createElement('span');
    readMoreSpan.textContent = 'READ MORE';
    moreDiv.appendChild(icon);
    moreDiv.appendChild(readMoreSpan);

    editDiv.appendChild(powerDiv);
    editDiv.appendChild(moreDiv);

    imageDiv.appendChild(img);
    imageDiv.appendChild(editDiv);
    flexItem.appendChild(imageDiv);

    flexContainer.appendChild(flexItem);
});

container.appendChild(flexContainer);
transformSection.appendChild(container);

// Append "Transforming businesses" section to the body
document.body.appendChild(transformSection);
